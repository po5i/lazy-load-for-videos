/*
 * Ensure that a handler is run before any other registered handlers,
 * independent of the order in which they were bound
 * As seen on https://stackoverflow.com/questions/2360655/jquery-event-handlers-always-execute-in-order-they-were-bound-any-way-around-t
 * and on https://gist.github.com/infostreams/6540654
 */
export default function ($) {
  if ($) {
    // eslint-disable-next-line no-param-reassign,func-names
    $.fn.bindFirst = function (which, handler) {
      // ensures a handler is run before any other registered handlers,
      // independent of the order in which they were bound
      const $el = $(this);
      $el.unbind(which, handler);
      $el.bind(which, handler);

      // eslint-disable-next-line no-underscore-dangle
      const { events } = $._data($el[0]);
      const registered = events[which];
      registered.unshift(registered.pop());

      events[which] = registered;
    };
  }
}
