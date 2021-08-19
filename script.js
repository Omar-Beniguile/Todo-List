$(document).ready(function () {
    "use strict";

    function affectSupression() {
        $('.btnSuppression').click(function () {
            $(this).parent().parent().parent().remove()
        });
    }

    function affectModification() {
        $(".tache-text").attr('contenteditable', 'true');
    }

    $('#btnAjouter').click(function () {
        $('#smallModal').modal('hide');
        let tache = $("#nvTacheText").val();
        injecteNouvelleTache(tache);
        $("#nvTacheText").val("");
    });

    function injecteNouvelleTache(tache) {
        $("#containerTache").append(`
            <div class="col-12 p-2 mt-2 tache" style="border: 1px solid black;border-radius: 15px;">
                <div class="row">
                    <span class="col-8">
                        <h3 class="tache-text">
                            ${tache}
                        </h3>
                    </span>

                    <span class="col-4 d-flex justify-content-end">
                        <img class="btn btnSuppression" src="https://img.icons8.com/cute-clipart/64/000000/delete-forever.png"
                            style="width: 20%;" />
                    </span>
                </div>
            </div>
        `);
        affectSupression();
        affectModification();
    }

    function initList() {
        injecteNouvelleTache("Microsoft .Net 5 (Nouveauté !)");
        injecteNouvelleTache("Microsoft Azure");
        injecteNouvelleTache("Microsoft Xamarin forms");
        injecteNouvelleTache("Microsoft Asp.Net");
        injecteNouvelleTache("Microsoft Entity Framework 6.*");
    }

    initList();
});