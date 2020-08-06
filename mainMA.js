const apiKey = '72bbed3a19c397fb81602b0065e8684c'

function searchCharacterName() {
  let name = $('#characterName').val();
  $.ajax({
    method: 'GET',
    url: 'https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=' + name + '&apikey=' + apiKey
  }).done(function(response){
    console.log(response);
    $('tbody').empty();
    if(response != undefined){
      for(let i = 0; i < response.data.results.length; i++){
        $('tbody').append('<tr><td>'+response.data.results[i].name+'</td><td><img width="100" height="100" src="'+response.data.results[i].thumbnail.path+'.'+response.data.results[i].thumbnail.extension+'" alt="characterImage"></td></tr>')
      }
    }
  });
}
