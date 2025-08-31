const App=(()=>{
  function renderGrid(){
    const grid=document.getElementById('articlesGrid');
    grid.innerHTML='';
    ARTICLES.forEach(a=>{
      const col=document.createElement('div');
      col.className='col-12 col-sm-6 col-lg-4';
      col.innerHTML=`
        <div class="card card-article h-100">
          <div class="card-body">
            <div class="d-flex justify-content-between mb-2">
              <span class="badge bg-primary">مادة ${a.id}</span>
              <button class="btn btn-sm btn-outline-secondary" onclick="App.open(${a.id})">عرض</button>
            </div>
            <h2 class="h6">${a.title}</h2>
          </div>
        </div>`;
      grid.appendChild(col);
    });
  }
  function openArticle(id){
    const a=ARTICLES.find(x=>x.id===id);
    if(!a)return;
    const el=document.getElementById('articleContent');
    el.innerHTML=`
      <h3 class="h5 mb-3">${a.title}</h3>
      <div class="mb-2"><strong>النص:</strong><div class="card card-body">${a.text}</div></div>
      <div class="mb-2"><strong>التحليل:</strong><div class="card card-body">${a.analysis}</div></div>
      <div><strong>مواد مرتبطة:</strong> ${
        a.related.map(r=>`<a href='#' onclick='App.open(${r});return false;' class='btn btn-sm btn-outline-primary me-1'>مادة ${r}</a>`).join(' ')
      }</div>`;
    bootstrap.Offcanvas.getOrCreateInstance('#articleCanvas').show();
  }
  function init(){renderGrid();}
  return{init,open:openArticle};
})();
document.addEventListener('DOMContentLoaded',App.init);