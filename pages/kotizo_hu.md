<!--
.. title: Bejelentkezés
.. slug: kotizo
.. date: 2016-02-25 20:28:50 UTC+01:00
.. tags:
.. category:
.. link:
.. description:
.. type: text
-->

## 10500 HUF

## 35 €

### MIESZ-tag vagy, vagy az szeretnél lenni?

|18 év alatt|60% kedvezmény|**4200 HUF**|14 €|
|-|-|-|-|
|**30**év alatt|**30% kedvezmény**|**7350 HUF**|**24,50 €**|

Fizetés a helyszínen forintban.

Ha mégis szeretnél előre fizetni (csak a teljes összeget!), küldd el e-mailben a képernyőd pillanatképét, amivel igazolod a fizetést, a következő e-mail címre: [jer@jer.hu](mailto:jer@jer.hu).

Fizetési lehetőségek: [eszperanto-ifjusag.hu/p/miesz.html](http://www.eszperanto-ifjusag.hu/p/miesz.html)
*Nem tudsz részt venni teljes időben? [Írj nekünk!](mailto:jer@jer.hu)*

|Szállás|1 éjszaka|2 éjszaka|ágynemű|
|--------|--------|--------|--------|
|        |2100 HUF|4200 HUF| 600 HUF|
|        |     7 €|    14 €|     2 €|

|Étkezés|reggeli|ebéd|vacsora|teljes JER|
|-------|-------|-------|-------|-------|
|        |525 HUF|1050 HUF|750 HUF|4650 HUF|
|        |1,25 €|3,50 €|2,50 €|15,50 €|


# Jelentkezés

## [<i class="fa fa-arrow-right"></i> Akarsz jelentkezni? <i class="fa fa-arrow-left"></i>](https://docs.google.com/forms/d/1kuHr1AI6Bcv2-mTSCMdL3cUA0WoNJNYt_RY8zYOpB9c/viewform)


### Már <b id="nb">sok</b> bolond!
<ul id="persons"></ul>

<script type="text/javascript">
    window.onload = function() { init() };
    var public_url =    "https://docs.google.com/spreadsheets/d/1I7-1SKUjmcEj7X8IrdpCCAKyrnzYawBymnFOX2F58Uw/pubhtml?gid=1068216995&single=true";
    function init() {
        Tabletop.init( { key: public_url, simpleSheet: true, callback: function(data, tabletop) {
            $('#nb').html(data.length);
            data.forEach(function(person) {
                $('#persons').append('<li>'+person['Mia nomo (la oficiala)']+'</li>');
            });
        } } )
    }
</script>