
function gotoArticle( qid, language ) {

  qid = qid.replace('http://www.wikidata.org/entity/Q', '') || '';
  //console.log( qid );
  window.parent.postMessage({ event_id: 'handleClick', data: { type: 'wikipedia-side', title: '', hash: '', language: language, qid: qid } }, '*');

}
