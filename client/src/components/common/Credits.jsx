import React, { Fragment } from 'react'

const credits = [
  {
    label: '404 Page',
    link: '<a href="https://www.freepik.com/free-vector/404-error-design-with-roadworks_1534921.htm">Designed by Freepik</a>'
  },
  {
    label: 'Forbidden',
    link: '<a href="https://www.freepik.com/free-photo/serious-business-man-showing-open-palm-or-stop-gesture-and-looking-at-camera_2540638.htm">Designed by Freepik</a>'
  },
  {
    label: 'Animals, Flags, Football, Goal with net',
    link: '<div>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>'
  },
  {
    label: 'Arrow',
    link: '<div>Icons made by <a href="https://www.flaticon.com/authors/roundicons" title="Roundicons">Roundicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>'
  },
  {
    label: 'Gold/Silver medals',
    link: '<div>Icons made by <a href="https://www.flaticon.com/authors/twitter" title="Twitter">Twitter</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>'
  },
  {
    label: 'Close X',
    link: '<div>Icons made by <a href="https://www.flaticon.com/authors/chanut" title="Chanut">Chanut</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>'
  },
  {
    label: 'Pencil, Trashcan',
    link: '<div>Icons made by <a href="https://www.flaticon.com/authors/icon-works" title="Icon Works">Icon Works</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>'
  }
]

const Credits = () => credits.map(obj => (
  <Fragment key={obj.label}>
    <h2>{obj.label}</h2>
    <div dangerouslySetInnerHTML={{ __html: obj.link }} />
  </Fragment>
))

export default Credits
