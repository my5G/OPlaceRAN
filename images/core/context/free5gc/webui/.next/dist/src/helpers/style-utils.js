'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transitions = exports.media = undefined;

var _styledComponents = require('styled-components');

var media = exports.media = {
  desktop: function desktop() {
    return (0, _styledComponents.css)(['@media (max-width:1200px){', '}'], _styledComponents.css.apply(undefined, arguments));
  },

  tablet: function tablet() {
    return (0, _styledComponents.css)(['@media (max-width:992px){', '}'], _styledComponents.css.apply(undefined, arguments));
  },

  mobile: function mobile() {
    return (0, _styledComponents.css)(['@media (max-width:768px){', '}'], _styledComponents.css.apply(undefined, arguments));
  }
};

var transitions = exports.transitions = {
  slideDown: (0, _styledComponents.keyframes)(['0%{opacity:0;transform:translateY(-100vh);}75%{opacity:1;transform:translateY(50px);}100%{transform:translateY(0px);}']),
  slideUp: (0, _styledComponents.keyframes)(['0%{transform:translateY(0px);opacity:1;}25%{opacity:1;transform:translateY(50px);}100%{opacity:0;transform:translateY(-100vh);}']),
  stretchOut: (0, _styledComponents.keyframes)(['0%{transform:scale(0.25,0.25);}100%{transform:scale(1,1);}']),
  shrinkIn: (0, _styledComponents.keyframes)(['0%{transform:scale(1,1);}100%{transform:scale(0.25,0.25);}'])
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9oZWxwZXJzL3N0eWxlLXV0aWxzLmpzIl0sIm5hbWVzIjpbImNzcyIsImtleWZyYW1lcyIsIm1lZGlhIiwiZGVza3RvcCIsInRhYmxldCIsIm1vYmlsZSIsInRyYW5zaXRpb25zIiwic2xpZGVEb3duIiwic2xpZGVVcCIsInN0cmV0Y2hPdXQiLCJzaHJpbmtJbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLEFBQVEsQUFBSyxBQUViOztBQUFPLElBQU07V0FDRixtQkFBQTtXQUFBLEFBQWEsZ0VBRWIsdUNBRkE7QUFEVyxBQU9wQjs7VUFBUSxrQkFBQTtXQUFBLEFBQWEsK0RBRVosdUNBRkQ7QUFQWSxBQWFwQjs7VUFBUSxrQkFBQTtXQUFBLEFBQWEsK0RBRVosdUNBRkQ7QUFiSCxBQUFlLEFBb0J0QjtBQXBCc0IsQUFDcEI7O0FBbUJLLElBQU07YUFDWCxBQUFXLGtDQURjLEFBY3pCO1dBQUEsQUFBUyxrQ0FkZ0IsQUE0QnpCO2NBQUEsQUFBWSxrQ0E1QmEsQUFvQ3pCO1lBQUEsQUFBVSxrQ0FwQ0wsQUFBb0I7QUFBQSxBQUN6QiIsImZpbGUiOiJzdHlsZS11dGlscy5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS92bWFkbWluL09QbGFjZVJBTi9pbWFnZXMvY29yZS9jb250ZXh0L2ZyZWU1Z2Mvd2VidWkifQ==