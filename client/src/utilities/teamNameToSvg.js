const rgx = /\s(\w)/;

export default function teamNameToSvg(name) {
  return `/images/crests/${name.toLowerCase().replace(rgx, "-$1")}.svg`;
}
