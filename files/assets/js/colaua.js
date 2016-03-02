/*
 * Colaua - Integrate GNU social/StatusNet conversations in static HTML pages
 * <https://elvil.net/fossil/colaua/>
 *
 * Version 0.1
 *
 * Released under Creative Commons CC0 1.0 Universal (public domain).
 */

var Colaua = {
    Notice: {
        addURL: function(notice) {
            var user_name = notice.user.screen_name;
            var user_url = notice.user.statusnet_profile_url;
            var notice_id = notice.uri.replace(/.*:noticeId=([^:]+).*/, '$1');
            notice.url = user_url.replace(RegExp(`/${user_name}\$`), `/notice/${notice_id}`);
            return notice;
        }
    },

    NoticeList: {
        fromConversation: function(url, test) {
            // The conversion supports both conversation and individual notice URLs.
            var api_conv_url = url.replace(/\/(?:notice|conversation)\/([0-9]+)$/, '/api/statusnet/conversation/$1.json');

            var requestArgs = {url: api_conv_url, background: true, initialValue: []};
            if (test) {
                requestArgs.method = 'GET';  // for testing with file URLs
            } else {
                requestArgs.dataType = 'jsonp';  // avoid CORS issues
            }

            return m.request(requestArgs)
                    .then(function(a) {return a.map(Colaua.Notice.addURL);})
                    .then(function(a) {return a.reverse();});
        }
    },

    controller: function(args) {
        this.error = m.prop('');
        this.notices = m.prop([]);

        Colaua.NoticeList.fromConversation(args.url, args.test)
            .then(this.notices, this.error)
            .then(m.redraw);
    },

    view: function(ctlr, args) {
        if (ctlr.error()) {
            return m('p.colaua-error', [
                "Error retrieving GNU social conversation: ",
                ctlr.error()
            ]);
        }

        if (ctlr.notices().length == 0) {  // retrieval in process
            return m('p.colaua-progress', [
                "Retrieving GNU social conversation from ",
                m('a', {href: args.url}, args.url),
                "..."
            ]);
        }

        var author = ctlr.notices()[0].user;
        return [
            m('p.colaua-link', ["GNU social conversation at ", m('a', {href: args.url}, args.url), ":"]),
            m('ol.notices xoxo', [
                ctlr.notices().map(function(notice) {
                    return m('li.h-entry notice', [
                        m('section.notice-headers', [
                            m('a.notice-title', {href: notice.url},
                              `${notice.user.name} (${notice.user.screen_name})\'s status on ${notice.created_at}`),
                            m('a.h-card p-author', {href: notice.user.statusnet_profile_url, title: notice.user.screen_name}, [
                                m('img.avatar u-photo', {src: notice.user.profile_image_url, alt: notice.user.name}),
                                notice.user.name
                            ])
                        ]),
                        m('article.e-content', m.trust(notice.statusnet_html))
                    ]);
                })
            ]),
            m('p.colaua-help', [
                "You may comment directly in ",
                m('a', {href: args.url}, "this conversation"),
                " if you have an account in its GNU social node.",
                " If you have an account in another node, please follow ",
                m('a', {href: author.statusnet_profile_url, title: author.screen_name}, author.screen_name),
                " to make the conversation appear in your node so that you may comment there."
            ])
        ];
    },

    // Mount a new Colaua component on the element with the given `elementId`.
    //
    // The element should have a ``data-colaua-url`` attribute with the notice
    // or conversation URL in a GNU social node.  If the element or the URL
    // attribute are missing, nothing is done.
    //
    // The element may also have a ``data-colaua-test`` attribute that will
    // enable plain GET access for testing (instead of the default JSON-P
    // which avoids CORS issues).
    //
    // If the component can be successfully created and mounted `true` is
    // returned, `false` otherwise.
    newOnId: function(elementId) {
        var colauaElement, colauaURL, colauaTest, colauaComponent;

        colauaElement = document.getElementById(elementId);
        if (!colauaElement)
            return false;

        colauaURL = colauaElement.getAttribute('data-colaua-url');
        colauaTest = colauaElement.getAttribute('data-colaua-test') != null;
        if (!colauaURL)
            return false;

        colauaComponent = m.component(Colaua, {url: colauaURL, test: colauaTest});
        m.mount(colauaElement, colauaComponent);
        return true;
    }

};

// Mount a new component automatically if the document has an element with id ``colaua-conversation``.
Colaua.newOnId('colaua-conversation');
