(function myFunction () {
  const $searchButton = $('#search-button');
  const $resultsContainer = $('#results-container');
  const $template = $('#template').html();

  function renderResults (data) {
    Mustache.parse($template); // optional, speeds up future uses
    var rendered = Mustache.render($template, data);
    $resultsContainer.html(rendered);
  }

  function getData () {
    const $keywords = $('#search-keywords');
    let searchData = {
      action: 'query',
      format: 'json',
      list: 'search',
      srprop: 'snippet',
      srsearch: $keywords.val(),
      origin: '*'
    };
    $.get('https://en.wikipedia.org/w/api.php', searchData).done(function (response) {
      renderResults(response.query);
    });
  }

  function wikiSearch () {
    getData();
  }

  $searchButton.on('click', wikiSearch);
  // $searchButton.on('click', wikiSearch);
})();
