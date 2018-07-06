'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var puppeteer = require('puppeteer');

_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  var browser, page;
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return puppeteer.launch();

        case 2:
          browser = _context.sent;
          _context.next = 5;
          return browser.newPage();

        case 5:
          page = _context.sent;
          _context.next = 8;
          return page.goto('https://example.com');

        case 8:
          _context.next = 10;
          return page.screenshot({ path: 'example.png' });

        case 10:
          _context.next = 12;
          return browser.close();

        case 12:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, this);
}))();
