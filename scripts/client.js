$(document).ready( onReady );

function onReady(){
    $( '#generateButton' ).on ('click', generateButton )
    $( '#div' ).on ( 'click', '.yellowButton', yellowButton )
    $( '#div' ).on ( 'click', '.deleteButton', deleteButton )
}
let number = 1;

function generateButton (){
    $( '#div' ).append(
       `<div class='red'>
            <p>${ number }</p>
            <input class="yellowButton" type="button" value="yellow">
            <input class="deleteButton" type="button" value="delete">
       </div>` 
    )
    number++
}


function yellowButton(){
    $( this ).parent().toggleClass( "yellow" );
    if ($( this ).val() === "yellow" ){
        $( this ).val("red"); 
    }
    else if ($( this ).val() === "red" ){
        $( this ).val("yellow"); 
    }
}

function deleteButton(){
    $( this ).parent().fadeOut(0);
}