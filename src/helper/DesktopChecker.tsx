function DesktopChecker() {
  if (window.innerWidth >= 1280) {
    return "desktop";
  } else {
    return "mobile";
  }
}

export default DesktopChecker;
