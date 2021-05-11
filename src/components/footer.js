function Footer({ classList, container, button }) {
  return (
    <footer className={`py-8 py-md-11 ${classList}`}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4 col-lg-3">
            {/* Brand*/}
            <img
              src="../img/brand.svg"
              alt="..."
              className="footer-brand img-fluid mb-2"
              width="90px"
            />

            {/* Text*/}
            <p className="text-gray-700 mb-2">A better way to build.</p>

            {/* Social*/}
            <ul className="list-unstyled list-inline list-social mb-6 mb-md-0">
              <li className="list-inline-item list-social-item me-3">
                <a href="#!" className="text-decoration-none">
                  <img
                    src="data:image/png;base64,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"
                    className="list-social-icon"
                    alt="..."
                  />
                </a>
              </li>
              <li className="list-inline-item list-social-item me-3">
                <a href="mailto:hello@crab.network" className="text-decoratiResourceson-none">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAACjElEQVRoQ+2YP2hTURjFz/duqEQwgp2lg4OgQ8GhVBxcXFRMmwwVh07ZaxrRwSSGmMRBMY3dM3Uo7ZC0EXVxcRBLB8FBwcGhOLdgBIMl7x15wZRYbXl9zU1iuW/Nvd/9fuecL++P4Ihc4nIk4xX+7zwGZNAcNI4YRzQpYKKlSVjfZY0jvqXTtNE4oklY32WNI76l07TRmyMi35WFm5p68FTWdrAE8sReiz2BiGArPxcd9nSipkWp2comiVMGpKWA4Nvoxcjw1JTYmgTft+zyMtWHd9VNECcP6Yg0AX4GrLIKDZWz2Wv1XgBlMi9Ddn07BjgxQM6SDBwSBFvBoDr3o2HfB3HLgiw4ami+8PT6hg6g5J0XI5a9PeOA0xAsHg+qR42G/amrM5JMrJwWIg040ySeB6xAMVsMr3UDKJOojTedZkIENwBrgYJcoTj51a2tbdhTd6tnYDPrOkRgHYLi6HikctA5auV/rRoFkRBgzHUASjL5J5EvneJoA2kfkp6tnSfthwQiADZEZN7LHLXzT3IGwIgAVRH1IDcX/vgvd7WDtA/NxGsXmrDzAK8KpA5hmdaxZ7vnyM2/OD9vgxIjGALkVQAqlS2F3+8Xz56B7DgUX71EcQokLwNw/64r7hy5v7v5BxAFoETkjdBK5koTb73MV89B2k2l4itXKCyAHPujUZF1oSTzpcnXXgB26vX7zp5KrIbp2LnWfdVS6XxxonYQgIEBcRsh2XqmExHfn2b7Fq1O1Y8MiJ8o7d4zEI4YkA4FjCOdcTBviN0Yjt81TLRMtLoYp66/j0DQEJHHmnr0VJbkPRDBvRZ7+q7l6aQ+LzIgfTbgr+ONI8YRTQqYaGkS1ndZ44hv6TRt/AVfN81aZJHvpgAAAABJRU5ErkJggg=="
                    className="list-social-icon"
                    alt="..."
                  />
                </a>
              </li>
              <li className="list-inline-item list-social-item me-3">
                <a href="https://t.me/DarwiniaNetwork" className="text-decoration-none">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAELElEQVRoQ+1YX2hbVRz+fufetZG1cTrdZGjZ2MMQ5oMMReeLhTlkbE0zZcp8kPnigy9JjR0l0TRLOofY3rAHYVNRkPniSLoSOup0PijioIigmyKz3ZgwqmhdrWn+3Ht/koTSrrbNOac2jHHzer/v9/2+33fuPeeEoqEM4zb4kWfkFkvRS+QWCwReIl4iqzQBb2mt0mC1y3qJaI9ulYheIisdLIH+AthkoGWltSr8xiZCuC4gUj72ZaPpp69XGohFhrbAtQ/CpQiD182ZoisEFBm8TcaokhEi+hSMSQY/J1P8JgzR5/41Inj4rcDfi3Hjh4fa7JL9IYHGCPyRYaz9sezkx8C8VkZLyYgh6Nl7NjfnJsaLn4B5n4xAFUN0yfSv25FItBdkOCdOjK659tO1HDPvJkKJGU31eEpGBJnbk1bHxXj8C9OZmjzJjEP1BKo+IJ5KpTs/k8HG4yycqcFDIGxg8GUwfSCTipIRE01bE+m9Y7MNvRHOBBymNMCbl2qSgF+TVrCNiJRuorHXslth81fMuE9mAEpGDMPYfaQ/cG5+4YHw13f8SRM97KIb4Ob/itLZvnRwj0wzs5hYd+ZBLtHwcgNaWE/JCIje6bOCryzW1NGezPp8EfvBdICZ2wEYtWVFmVQ6+IySkVB2lME7VDhKRgiYNnz0UOJY8MpyIr2RkQ2OM7OLyd3CwEzfwP4BlaZioexVBrepcBSMEIN4HMBvLc1Ne3qO7Z1UEVLBRsPZaZkXfH5NBSOAeeddrZi+0eYSWpNvd15QaU4We/z4cPPEWEHqM61vRJiPJwY6vpFtSgfXG8ltL9ul71W5SomA6GSfFXxZVUQFH+3KdMFFvwqn+lFR/IPOESTak1bnl6pCsvhYOHuOmXfJ4mdxqkYq3v8g0POyO7VKQ5XzllOyx5khVHg6iVTrE8Fl0HsmxLsJKzCqKroUPhYaTDHcqE49jUQqRijkg3m67G+5kUi0T+sIL+TEu89sckruxZuP8vKV9YyAfmltEg8vdSSXl59DRsPZIaUT9QIRLSO15UW5u7HxQJe1c0an8fmc18ODB112T62kjraRmih9RzBeTaU7zus2UTnOlO38JYDX69bQftkXChLhKkDJlBV8X6WZeHzYb08VRsB4TIW3GHaFiVRL/iBIvJm0Oj9WaeZoz/C9/xSKOTA/qsJbCitppHIpYqpGCMozoXL6PU9MZ3T2k1gk+yRsnGLwpv/DhPTSIiK7tm9Qf8IKXNYVj3cP3++UC0cAvKiz6S2nK5nIbAkqEnFWEJ0WfvNsb+++vIypaNfgTmJ+CeAXmOGT4ahiFI3Mla8tMR4B6FsB/EwkfnfARcEwmLERhAfA/AiAJ1QvSaompJeWTuFGc7QTaXSj9fQ8I/Um1OjnXiKNnng9PS+RehNq9HMvkUZPvJ7ebZPIv2+b3fLh+Yn7AAAAAElFTkSuQmCC"
                    className="list-social-icon"
                    alt="..."
                  />
                </a>
              </li>
              <li className="list-inline-item list-social-item me-3">
                <a href="https://medium.com/@DarwiniaNetwork" className="text-decoration-none">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAE2UlEQVRoQ+1Za2gcVRQ+587mpWlKfeCPSKCFPiQoIjXSgtFaLVpjd2exYK0/oqLBiu3O2ii6u1m3OyslaXeWIFihIlUoNpWZTar54WuNj6BUECTB2lqqxaZKG9PEmsZk5x6Z1oTsZmZ2E+lmqLv/ds433znf/e49984MBnwqwRXww6IQh7lYdMRhhkDRkaIjl2kEilPrMg3snGn/P44wBrsQhO5cQ6UT3wlEdblw2XGGwiYiOmt7H/JHieBxO0xORxDwuIAVdRHl/j/siFqkpKgTV2cjBAE+lxPeu+zuCfiTq4F4NxAs/E9CLt6MkHJVLVoXiaxJW5GFw8T0Ye0IASzNVwxDtjmqePZb4YO+rnsI9S4gujoXZ05HpgiQ7YkpnmfsCIP+ZBNxvidX0ktxHLxhSVn11q3r/zbDh6SuWoL0t0RQng9f/kKM1Ay3yHHxdWtXUuXp4aGTAHB9ruQMMB5NiM9buiFp24gokYtnMj47IYADckKstp3TktoCBJFcBWCpsEJudf9ohQv5NR/npOTimZMQQByKKeI1duSvvqReO3oBTxLQVVY4BPxMTohr7HgKIqSjg4T+fqBIBLlZMUG/+hpxeNaqUKPlRhX3u+FwymXVQAoiJBxOVernh9bJu72m7Tbse3+JjuPHiIBli0HEs0LV0uqKsdMVoxOjt+2Iu1Omi70QU8sQkh4Z+iimeFdZL1b1IBE8nB03Ntho3NsckpJbkPCXHQn3B/MrZHjoT4asPqp4vjArJCxpdWmibzJjSFjiWi63PXQs4NO+E4AFHSEEEA/FFHGD9Yam9hBA/VRnQfhUVrxrw1LnyjTphwUQGpwhBJCwlGrlVu8PFou+gTgcmoox9kgs7jkQkLQ3gOhpBwkBQIS3ZMX7hJkQIsKQlOwnoJsA4Ixr4bIbK/86VXJOHz0NRAucJmRcKBEWR1rdA6auSNqTRLSXMWyNxsUXg//+N7COEmIUNFmkmZD29u6y30+MnXCBUB9R3D8FfdrXBHSHI4UAwrCrqrwmElk/YtpKpeSdRncLScmbOfHvJzGOc+RSYaw5lvDssjt2BP1aO3F6ztlCEE7VrKhZ3NS0csJ0XwmnytMj5waAaJGzhRjVITTGFO8+i536Mc7pnemx+ZtagIOxhHhdXOqtGKTfRk0K7pMV8RZEnPGpIujL3Bzne7F/ElPEe40igpLaRwS1Mw6FjD0oxz0ZLyuCL3Qup3H9SDZ2Xhy5eGotg9sjO8WfjYKMDkTEewmgcnqBiNgjK+Ld06+F/Gob57DdCUImGLK12QfEFkl164QaAOH0Ipngqovu3nDYuBYO95Wmh4/+OuPxF+GCC+HWSNx71HRNbVdX8TR+lc1t1RXzetRlwJ6KJjx7zUgCUvJlIB7LdAXekxXvRuNawK9uBA4dGXGA84jQEFW8PXbtOuTXGonoTbPnmhlTOuenN4T2mOLdZrs/+LT9BLRpEoMIHFy4TG4Tjwd86ocAcN9UDHCEGD4Qi3t67TgnYwFf52YA3eiEgh3e1hFEGEMUVjMGuh0JT8MCDvqXWWtlH5DwNoH+ceb0YM0glBzMR8QURh9/BYAa5yxkVsnmGZzXGpnnGvNKXxSS1zAVEFR0pICDnVeqoiN5DVMBQUVHCjjYeaW6chwJStqZvCQ7HPQP33kQ/6mh3c4AAAAASUVORK5CYII="
                    className="list-social-icon"
                    alt="..."
                  />
                </a>
              </li>
              <li className="list-inline-item list-social-item">
                <a href="https://github.com/darwinia-network/darwinia/tree/master/runtime/crab" className="text-decoration-none">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAEQUlEQVRoQ+2ZX4hUZRjGn/fMZDMYy0qFFGRFBbFKsheFihdJF2l/nD8X0h+hEMLqouaMtlkzw3F2zmiZejZDyLDsJrIl5syyJRJ2WSZJZW4UXWRBKS0ZrtTS7s6cJ2a3yW1z9Pu+3VlE5lw/z/u8v+/9vnPmnJFMqkRcBpe0QC6xKbYmcokNBK2JtCbSpBUw3loiCAAJSIab1JtWWWMQCPyil0w6G/vuCKp8OADXg5ynky6QMwK8hTDfv8oKDZwdCw6BvEunRl1rDCIWsu7OZLFeyHH89soQPBE+AuIYRb60wN8InCFFBGiHyDUEO0EuFpH9IURTeW/l7/UaGdvfDfLp2QWR0CrXix2cGuo4A3Py+UWjF2qmkSaXLq0LArw5qyAhhB7o7ol9aBLayJNL+48HAfeZ1DTfWpBn3J7EayahjTzZlJ8j2G1S0xgEAqfoJY1CG4LY5W1k8NwsgsivYYl2TD6oJuFTPcUX++YPDwffALxat57RRCxL7MLORI9umIo+k/K7AL6sop2s0QYRwWioLXJtPn/fWd0wFf3WTR/M+3NkbFD3QWsC8onrJZerNGWqydilwyCW6Pi1QSDW60Uv/pROiK42a5ffIIMndHzaIJZgS8FLZnRCdLU5u7w1YLBJx6cNImK94nrxLp0QXW3W9reT3KDjMwDBPtdLrtMJ0dVmbf9tko/p+LRBAPmq2JPo1AnR1WZSpeMAFun4tEFq7yHh0NzrNm+/d1AnSFXrdPVdXxkNfgYoqp6aThtkvLhIruglXJ0gVW027XczYE5VX9cZgdReiKKIdmR6Vp7SDbyQPpMu3yABBwi26dY1ApkYinwUarvtwYu9e6g2tGvXgSsHfxg5SPBuVc9knTHIP1usL9zWvjafX/GHSXjd4zgH2ipDI/sBrjKtowEiIyL4mEQHwJvOBcqPYlnPFnas7hcRrQ/iJCW3sRxDFa8SXGAKoXfYBafCnLN84bL7f/r6U383gfX/CRb5HuA7EOuQuyN2uBFUby9Dx474S6Uq91CwFuSt0wEwPOxy2hJZUfDixzO2XwYZ+18TIv1FL7G6UXOOQ6s65H9G4M6ZADAEqZ1y/DL/5sgtp09Yc6sY/oLEjf8WE6lEGV1wsbtZLt3XSVaPkrBmCkbjjJyLDImV7Pbi/uYN/bdXgrG9pCwDGIjIe66XeFSluaxdGiCxUEWrojECEciRghdfWj8He/YcveLkyYjo3IqzduldEg+pNKmiMQIZL2xh7+IliSfXrJGqStBUTTZVeonA8ybe83nMQSYeiidA9ool341/Bw4Hn7vbkt+qNJdN+VsIvqCiVdFMC2RqgIiVdr24pxLcAmmwSq2JnG9hdL53mf5cb7RtZ3QiAKoQ+QtgRSikYPy3l4Akav8sTFxCCIQREhGV86SimWkQlcymaFogTVnWaRRtTWQai9cUa2siTVnWaRS9bCbyN++dCwFuqzC6AAAAAElFTkSuQmCC"
                    className="list-social-icon"
                    alt="..."
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-4 col-lg-2">
            {/* Heading*/}
            <h6 className="fw-bold text-uppercase text-gray-700">Resources</h6>

            {/* List*/}
            <ul className="list-unstyled text-muted mb-6 mb-md-8 mb-lg-0">
              <li className="mb-3">
                <a href="https://darwinia.network/Darwinia_Genepaper_EN.pdf" className="text-reset">
                  Genepaper
                </a>
              </li>
              <li className="mb-3">
                <a href="https://darwinia.network/ChainRelay_Technical_Paper(Preview)_EN.pdf" className="text-reset">
                  Technical Paper
                </a>
              </li>
              <li className="mb-3">
                <a href="https://crab.network/docs/" className="text-reset">
                  Documentation
                </a>
              </li>
              <li className="mb-3">
                <a href="https://github.com/darwinia-network/darwinia/tree/master/runtime/crab" className="text-reset">
                  Github
                </a>
              </li>
              <li className="mb-3">
                <a href="https://crab.subscan.io/" className="text-reset">
                  Explorer
                </a>
              </li>
              <li className="mb-3">
                <a href="https://apps.darwinia.network/" className="text-reset">
                  Wallet
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-4 col-lg-2">
            {/* Heading*/}
            <h6 className="fw-bold text-uppercase text-gray-700">Pages</h6>

            {/* List*/}
            <ul className="list-unstyled text-muted mb-6 mb-md-8 mb-lg-0">
              <li className="mb-3">
                <a href="https://crab.network/" className="text-reset">
                  Home
                </a>
              </li>
              <li className="mb-3">
                <a href="./economic" className="text-reset">
                  Economic
                </a>
              </li>
              <li className="mb-3">
                <a href="./plo" className="text-reset">
                  PLO
                </a>
              </li>
         
            </ul>
          </div>
          <div className="col-6 col-md-4 offset-md-4 col-lg-2 offset-lg-0">
            {/* Heading*/}
            <h6 className="fw-bold text-uppercase text-gray-700">Connect</h6>

            {/* List*/}
            <ul className="list-unstyled text-muted mb-0">
              <li className="mb-3">
                <a href="https://medium.com/@DarwiniaNetwork" className="text-reset">
                  Medium
                </a>
              </li>
              <li className="mb-3">
                <a href="https://t.me/DarwiniaNetwork" className="text-reset">
                  Twitter
                </a>
              </li>
              <li className="mb-3">
                <a href="mailto:hello@crab.network" className="text-reset">
                  Email
                </a>
              </li>
            </ul>
          </div>
          
        </div>{" "}
        {/* / .row*/}
      </div>{" "}
      {/* / .container*/}
    </footer>
  );
}

export default Footer;
