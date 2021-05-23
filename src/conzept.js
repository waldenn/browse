
function gotoArticle( qid, language ) {

  qid = qid.replace('http://www.wikidata.org/entity/Q', '') || '';

  var url = 'https://conze.pt/app/wikipedia/?t=&l=' + language + '&qid=' + qid ;
  window.parent.postMessage({ event_id: 'handleClick', data: { type: 'link', title: '', url: url, current_pane: getCurrentPane(), target_pane: 'ps2' } }, '*' );

  //console.log( qid );
  //window.parent.postMessage({ event_id: 'handleClick', data: { type: 'wikipedia-side', title: '', hash: '', language: language, qid: qid } }, '*');

}
