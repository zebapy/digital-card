import "./styles.scss";
import clsx from "clsx";

function Face({ fem, sm }) {
  return (
    <div className={clsx("face", { "face-fem": fem, "face-sm": sm })}>
      <div className="face-upper">
        <div className="face-eye face-eye-left">
          <div className="face-lashes"></div>
          <div className="face-pupil"></div>
        </div>
        <div className="face-eye face-eye-right">
          <div className="face-lashes"></div>
          <div className="face-pupil"></div>
        </div>
      </div>
      <div className="face-lower">
        <div className="face-cheek"></div>
        <div className="face-mouth">
          <div className="face-mouth-inner"></div>
        </div>
        <div className="face-cheek"></div>
      </div>
    </div>
  );
}

function BrowserFavs() {
  return (
    <>
      <div className="star">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.0979 5.854C18.6979 4.012 21.3039 4.012 21.9019 5.854L24.0419 12.438C24.1727 12.839 24.4268 13.1884 24.7681 13.4362C25.1093 13.6841 25.5202 13.8177 25.9419 13.818H32.8659C34.8039 13.818 35.6079 16.298 34.0419 17.438L28.4419 21.506C28.1 21.7541 27.8454 22.104 27.7146 22.5057C27.5838 22.9074 27.5836 23.3402 27.7139 23.742L29.8539 30.326C30.4539 32.168 28.3439 33.702 26.7739 32.562L21.1739 28.494C20.8324 28.246 20.4211 28.1125 19.9989 28.1125C19.5768 28.1125 19.1655 28.246 18.8239 28.494L13.2239 32.562C11.6559 33.702 9.54795 32.168 10.1459 30.326L12.2859 23.742C12.4163 23.3402 12.4161 22.9074 12.2853 22.5057C12.1545 22.104 11.8999 21.7541 11.5579 21.506L5.95995 17.44C4.39395 16.3 5.19995 13.82 7.13595 13.82H14.0579C14.48 13.8201 14.8914 13.6867 15.233 13.4388C15.5746 13.1909 15.8291 12.8413 15.9599 12.44L18.0999 5.856L18.0979 5.854Z"
            fill="#75C9CC"
          />
        </svg>
      </div>

      <div className="bookmarks">
        <div className="mark"></div>
        <div className="mark mark-fav">
          <Face sm />
        </div>
        <div className="mark mark-fav">
          <Face fem sm />
        </div>
        <div className="mark"></div>
        <div className="mark"></div>
        <div className="mark"></div>
        <div className="mark"></div>
        <div className="mark"></div>
      </div>
    </>
  );
}

function Browser({ children }) {
  return (
    <div className="browser">
      <div className="browser-toolbar">
        <div className="browser-btn"></div>
        <div className="browser-btn"></div>
        <div className="browser-btn"></div>
        <div className="browser-url"></div>
        <div className="browser-menu">
          <div className="browser-menu-bar"></div>
          <div className="browser-menu-bar"></div>
          <div className="browser-menu-bar"></div>
        </div>
      </div>

      <div className="browser-body">
        <div className="">{children}</div>
      </div>
    </div>
  );
}

function Card({ front, inside }) {
  return (
    <div className="card">
      <div className="card-front">{front}</div>

      <div className="card-inside">{inside}</div>
    </div>
  );
}

export default function App() {
  return (
    <div className="app">
      <div className="card">
        <div className="card-front">
          <div className="card-main">
            <Browser>
              <Face />
            </Browser>
            <p>If you were a site, I'd bookmark you.</p>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-in">
          <Browser>
            <BrowserFavs />
          </Browser>
          <p>cause you're my favorite</p>
        </div>
      </div>

      <div className="controls">
        <button className="btn">Open card</button>
      </div>
    </div>
  );
}
