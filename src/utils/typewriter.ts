export interface Options {
  loop?: boolean;
  typingSpeed?: number;
  deletingSpeed?: number;
  cursor?: string;
}
export interface Phrase {
  text: string;
  style?: string;
}

type Callback = () => Promise<void>;
type PromiseResolve = () => void;
type QueMethod = (promiseResolve: PromiseResolve) => void;

export default class Typewriter {
  private callbackQueue: Callback[];
  private phrases: Phrase[];
  private element: HTMLElement;
  private readonly cursor: string;
  private readonly shouldLoop: boolean;
  private typingSpeed: number;
  private deletingSpeed: number;
  private intervalRefs: NodeJS.Timer[] = [];
  private timeoutRefs: NodeJS.Timeout[] = [];
  constructor(element: HTMLElement, options: Options = {}) {
    this.cursor = options.cursor ?? "|";
    this.element = this.appendTypewriterElement(element);
    this.shouldLoop = options.loop ?? true;
    this.typingSpeed = options.typingSpeed ?? 100;
    this.deletingSpeed = options.deletingSpeed ?? 100;
    this.phrases = [];
    this.callbackQueue = [];
  }

  private appendTypewriterElement(element: HTMLElement) {
    const parent = element;
    let typewriterElement: HTMLElement | null = parent.querySelector(".typewriter");
    if (typewriterElement) {
      typewriterElement.remove();
    }

    typewriterElement = document.createElement("span");
    typewriterElement.setAttribute("class", "typewriter");
    parent.appendChild(typewriterElement);

    const textElement: HTMLElement = document.createElement("span");
    textElement.setAttribute("class", "typewriter-text");
    textElement.innerHTML = this.buildCursor();

    typewriterElement.insertAdjacentElement("beforeend", textElement);
    return textElement;
  }

  private addQueue(method: QueMethod) {
    this.callbackQueue.push(() => {
      return new Promise((resolve) => {
        method(resolve);
      });
    });
  }

  private buildCursor() {
    return `<span class="typewriter-cursor">${this.cursor}</span>`;
  }

  private buildText() {
    let sentence = "";
    this.phrases.forEach((phrase, index) => {
      /* only append the cursor on the last phrase */
      const cursor = index < this.phrases.length - 1 ? "" : this.buildCursor();
      const temp = `<span style="${phrase.style}">${phrase.text}${cursor}</span>`;
      sentence = `${sentence}${temp}`;
    });
    this.element.innerHTML = sentence;
  }

  typeString(phrase: Phrase, speed = this.typingSpeed): Typewriter {
    this.addQueue((promiseResolve: PromiseResolve) => {
      let charCounter = 0;
      const phraseIndex = this.phrases.length;
      this.phrases.push({
        style: phrase.style,
        text: "",
      });
      const typingInterval = setInterval(() => {
        const currentChar = phrase.text[charCounter];
        const currentText = this.phrases[phraseIndex].text;
        this.phrases[phraseIndex].text = `${currentText}${currentChar}`;
        this.buildText();
        charCounter++;
        if (charCounter > phrase.text.length - 1) {
          clearInterval(typingInterval);
          promiseResolve();
        }
      }, speed);
      this.intervalRefs.push(typingInterval);
    });
    return this;
  }

  private deleteText(count: number, speed = this.deletingSpeed, promiseResolve: PromiseResolve) {
    let deleteCounter = 0;
    const deleteInterval = setInterval(() => {
      deleteCounter = deleteCounter + 1;
      if (this.phrases.length === 0) {
        if (deleteCounter === count) {
          clearInterval(deleteInterval);
          promiseResolve();
        }
        return;
      }
      let index = this.phrases.length - 1;
      let text = this.phrases[index].text;
      if (text.length === 0) {
        /* this phrase is deleted completely, remove it from the list and
         * continue deleting another phrase */
        this.phrases.pop();
        index = this.phrases.length - 1;
        text = this.phrases[index].text;
      }
      this.phrases[index].text = text.substring(0, text.length - 1);
      this.buildText();
      if (deleteCounter === count) {
        clearInterval(deleteInterval);
        promiseResolve();
      }
    }, speed);
    this.intervalRefs.push(deleteInterval);
  }

  deleteChars(count: number, speed = this.deletingSpeed): Typewriter {
    this.addQueue((promiseResolve) => {
      this.deleteText(count, speed, promiseResolve);
    });
    return this;
  }

  deleteAll(speed = this.deletingSpeed) {
    this.addQueue((promiseResolve) => {
      let totalTextCounter = 0;
      this.phrases.forEach((phrase) => {
        totalTextCounter = totalTextCounter + phrase.text.length;
      });
      this.deleteText(totalTextCounter, speed, promiseResolve);
    });
    return this;
  }

  pauseFor(duration: number = 1000) {
    this.addQueue((promiseResolve) => {
      const pauseTimeout = setTimeout(() => {
        promiseResolve();
      }, duration);
      this.timeoutRefs.push(pauseTimeout);
    });
    return this;
  }

  private clearTimers() {
    this.intervalRefs.forEach((interval) => {
      try {
        clearInterval(interval);
      } catch (e) {
        // ignore
      }
    });
    this.timeoutRefs.forEach((timeout) => {
      try {
        clearTimeout(timeout);
      } catch (e) {
        // ignore
      }
    });
    this.callbackQueue = [];
    this.intervalRefs = [];
    this.timeoutRefs = [];
  }

  private async init() {
    let callbackCounter = 0;
    const totalCallbacks = this.callbackQueue.length;
    let callback = this.callbackQueue.shift();
    while (callback) {
      callbackCounter++;
      await callback();
      if (this.shouldLoop) {
        if (callbackCounter === totalCallbacks) {
          callbackCounter = 0;
          this.phrases = [];
        }
        this.callbackQueue.push(callback);
      }
      callback = this.callbackQueue.shift();
    }
  }

  clean() {
    this.clearTimers();
  }

  start() {
    try {
      this.init();
    } catch (e) {
      // ignore
    }
  }
}
