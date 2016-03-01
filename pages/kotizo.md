<!--
.. title: Kotizo
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

### Ĉu vi estas HEJ-ano, aŭ volas esti?

|sub 18|60% rabato|**4200 HUF**|14 €|
|-|-|-|-|
|**sub 30**|**30% rabato**|**7350 HUF**|**24,50 €**|

Pagado surloke en HUF.

Se vi tamen volas jam antaŭe pagi (nur la tutan sumon!), bv. sendi mesaĝon de via ekranfoto kun pruvo de la pagado al [jer@jer.hu](mailto:jer@jer.hu).

Pagebloj: [eszperanto-ifjusag.hu/p/miesz.html](http://www.eszperanto-ifjusag.hu/p/miesz.html)

*Jen la detala kotiztabelo (la supre indikita 10500 HUF / 35 € estas la tuttempa kosto, kun manĝado kaj loĝado dum la tuta aranĝo).*

|Loĝado|1 nokto|2 noktoj|littukoj|
|--------|--------|--------|--------|
|        |2100 HUF|4200 HUF| 600 HUF|
|        |     7 €|    14 €|     2 €|

|Manĝado|matene|tage|vespere|tuta JER|
|-------|------|----|-------|--------|
|  |525 HUF|1050 HUF|750 HUF|4650 HUF|
|       |1,25 €|3,50 €|2,50 €|15,50 €|


# Aliĝilo

## [<i class="fa fa-arrow-right"></i> Ĉu vi volas aliĝi? <i class="fa fa-arrow-left"></i>](https://docs.google.com/forms/d/1kuHr1AI6Bcv2-mTSCMdL3cUA0WoNJNYt_RY8zYOpB9c/viewform)

### Jam <b id="nb">multaj</b> frenezuloj!
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
