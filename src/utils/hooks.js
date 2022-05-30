import { useState, useEffect, useRef } from "react";

export const useIsMountedRef = () => {
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;

    return () => {
      isMounted.current = false;
    };
  }, []);

  return isMounted;
};

// unsubscribe and remove from  the tracker
export const unsubscribe = (tracker) => {
  tracker.current.isActive = false;

  if (tracker.current.subscriber) {
    tracker.current.subscriber.then((unsubFn) => unsubFn()).catch(console.error);
    tracker.current.subscriber = null;
  }
};

// subscribe, trying to play nice with the browser threads
const subscribe = (mountedRef, tracker, fn, params, setValue) => {
  unsubscribe(tracker);

  setTimeout(() => {
    if (mountedRef.current) {
      if (fn && !fn.meta?.type?.isDoubleMap) {
        tracker.current.isActive = true;

        tracker.current.subscriber = params
          ? fn(...params, (value) => {
              mountedRef.current && tracker.current.isActive && setValue(value);
            })
          : fn((value) => {
              mountedRef.current && tracker.current.isActive && setValue(value);
            });
      } else {
        tracker.current.subscriber = null;
      }
    }
  }, 0);
};

export const useCall = (fn, params) => {
  const mountedRef = useIsMountedRef();
  const tracker = useRef({
    isActive: false,
    serialized: null,
    subscriber: null,
  });
  const [value, setValue] = useState(null);

  // initial effect, we need an un-subscription
  useEffect(() => {
    return () => unsubscribe(tracker);
  }, []);

  // on changes, re-subscribe
  useEffect(() => {
    if (mountedRef.current && fn) {
      subscribe(mountedRef, tracker, fn, params, setValue);
    }
  }, [fn, mountedRef, params]);

  return value;
};

export const useEventTrigger = (api, checks = [], filter = () => true) => {
  const [state, setState] = useState({
    blockHash: "",
    events: [],
  });
  const mountedRef = useIsMountedRef();
  const eventRecords = useCall(api?.query.system.events);

  useEffect(() => {
    if (mountedRef.current && eventRecords) {
      const events = eventRecords.filter((r) => r.event && checks.some((c) => c && c.is(r.event)) && filter(r));

      if (events.length) {
        setState((prev) => {
          if (prev.blockHash === eventRecords.createdAtHash?.toHex()) {
            return prev;
          }
          return {
            blockHash: eventRecords.createdAtHash?.toHex() || "",
            events,
          };
        });
      }
    }
  }, [eventRecords, checks, filter, mountedRef]);

  return state;
};
