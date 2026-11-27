;(function () {
  'use strict'

  // The default UI leaves these icon-only buttons without an accessible name.
  var labels = { '.nav-toggle': 'Toggle navigation', '.nav-item-toggle': 'Toggle section' }
  Object.keys(labels).forEach(function (selector) {
    document.querySelectorAll(selector).forEach(function (el) {
      el.setAttribute('aria-label', labels[selector])
    })
  })

  // Tooltip for the icon-only edit link, whose text is hidden by site-extra.css.
  document.querySelectorAll('.edit-this-page a').forEach(function (el) {
    el.title = el.textContent
  })
})()
