$(document).ready(function () {
    // this is a workaround for a bug fixed in jquery 1.9 (checked is toggled after that handler is fired
    $(cf_obj['scen'].pfx + ' input[type="checkbox"][name="hazard"]').prop('checked', true).triggerHandler('click');
    $(cf_obj['scen'].pfx + ' div[name="rupture-file-html"] select[name="file_html"]').val('data/rupture_file/rupture_new.xml');
    
    var data = [
        [ "40", "40" ], ["30", "30"], ["20", "20" ]
    ];
    
    var table = $(cf_obj['scen'].pfx + ' div[name="table"]').handsontable('getInstance');
    table.loadData(data);
    
    $(cf_obj['scen'].pfx + ' div[name="hazard-gmpe_specify-gmpe"] input[type="text"]').focus();
    setTimeout(function () {
        // waiting for gmpe list population
        $(cf_obj['scen'].pfx + ' div[name="hazard-gmpe_specify-gmpe"] div.sol-label-text:contains("AbrahamsonEtAl2014RegCHN")'
         ).click()
        $(cf_obj['scen'].pfx + ' button[name="download"]').click();



    }, 1000);
});
