/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */


;(function($) {
    'use strict';

    var $html = $(document.documentElement);

    // Defined in global.js
    if (isFirefox()) {
        var latestFirefoxVersion = $html.attr('data-latest-firefox');
        latestFirefoxVersion = parseInt(latestFirefoxVersion.split('.')[0], 10);
        if (isFirefoxUpToDate(latestFirefoxVersion + '')) {
//            $('#fx10-download').hide();
        }
    }


})(window.jQuery);
