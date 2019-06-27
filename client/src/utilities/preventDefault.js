export default function preventDefaultAndCall(fn) {
  return function(e) {
    e.preventDefault();
    return fn();
  };
}
