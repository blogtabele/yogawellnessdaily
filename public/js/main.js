(function(a) {
        a.fn.countTo = function(b) {
          b = b || {};
          return a(this).each(function() {
            function d(a) {
              a = c.formatter.call(k, a, c);
              h.html(a)
            }
            var c = a.extend({}, a.fn.countTo.defaults, {
                from: a(this).data("from"),
                to: a(this).data("to"),
                speed: a(this).data("speed"),
                refreshInterval: a(this).data("refresh-interval"),
                decimals: a(this).data("decimals")
              }, b),
              l = Math.ceil(c.speed / c.refreshInterval),
              n = (c.to - c.from) / l,
              k = this,
              h = a(this),
              m = 0,
              f = c.from,
              g = h.data("countTo") || {};
            h.data("countTo", g);
            g.interval && clearInterval(g.interval);
            g.interval = setInterval(function() {
              f += n;
              m++;
              d(f);
              "function" == typeof c.onUpdate && c.onUpdate.call(k, f);
              m >= l && (h.removeData("countTo"), clearInterval(g.interval), f = c.to, "function" == typeof c.onComplete && c.onComplete.call(k, f))
            }, c.refreshInterval);
            d(f)
          })
        };
        a.fn.countTo.defaults = {
          from: 0,
          to: 0,
          speed: 100,
          refreshInterval: 100,
          decimals: 0,
          formatter: function(a, d) {
            return a.toFixed(d.decimals)
          },
          onUpdate: null,
          onComplete: null
        }
      })(jQuery);
      jQuery(function(a) {
        a(".count-number").data("countToOptions", {
          formatter: function(a, d) {
            return a.toFixed(d.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ",")
          }
        });
        a(".timer").each(function(b) {
          var d = a(this);
          b = a.extend({}, b || {}, d.data("countToOptions") || {});
          d.countTo(b)
        })
      });
     
      var t = new XMLHttpRequest;
      t.onreadystatechange = function() {
        if (4 == this.readyState && 200 == this.status) {
          var a = JSON.parse(this.responseText);
          ipadd = a.ip;
          city = a.city;
          country = a.country;
          isp = a.connection.isp;
          var b = new Date;
          currtime = a.timezone.current_time;
          document.getElementById("ip_add").textContent = "アドレスIP: " + ipadd + " " + b.toLocaleString("EN-US", currtime);
          document.getElementById("city").textContent = "位置: " + city + ", " + country;
          document.getElementById("isp").textContent = "ISP: " + isp
        }
      };
      t.open("GET", "https://ipwho.is/?lang=en", !0);
      t.send();
  