
:root{
  --navy:#0F1B33;
  --red:#C8102E;
  --ink:#0E1320;
  --muted:rgba(255,255,255,.72);
  --stroke:rgba(255,255,255,.14);
  --shadow: 0 14px 30px rgba(0,0,0,.25);
  --radius:14px;
}
*{ box-sizing:border-box; }
html,body{ height:100%; }
body{
  margin:0;
  font-family: system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;
  background: linear-gradient(180deg, var(--navy) 0%, #0B1428 100%);
  color:#fff;
}
a{ color:inherit; text-decoration:none; }
a:hover{ text-decoration:underline; }

.app{ min-height:100vh; display:grid; grid-template-columns: 320px 1fr; }

.sidebar{
  position:sticky; top:0; height:100vh;
  padding:18px 14px;
  border-right: 1px solid var(--stroke);
  background:
    radial-gradient(900px 500px at 20% 10%, rgba(200,16,46,.12), transparent 58%),
    radial-gradient(900px 500px at 80% 30%, rgba(255,255,255,.06), transparent 60%),
    linear-gradient(180deg, rgba(255,255,255,.04), rgba(255,255,255,.02));
  overflow:auto;
}

.brand{
  display:flex; flex-direction:column; gap:10px;
  padding:10px 10px 14px;
  border:1px solid var(--stroke);
  border-radius: var(--radius);
  background: rgba(255,255,255,.04);
  box-shadow: 0 10px 20px rgba(0,0,0,.18);
}
.brand img{ width:100%; height:auto; display:block; }
.tagline{
  text-align:center;
  font-weight:800;
  letter-spacing:.12em;
  font-size:12px;
  color: var(--muted);
}

.nav{ margin-top:14px; display:flex; flex-direction:column; gap:10px; }
.nav-header{
  padding:10px;
  border-radius: 12px;
  border:1px solid var(--stroke);
  background: rgba(255,255,255,.04);
}
.nav-header input{
  width:100%;
  padding:10px 12px;
  border-radius: 10px;
  border:1px solid rgba(255,255,255,.16);
  background: rgba(0,0,0,.18);
  color:#fff;
  outline:none;
}
.nav-header input::placeholder{ color: rgba(255,255,255,.55); }

.nav-group{
  border:1px solid var(--stroke);
  border-radius: 12px;
  background: rgba(255,255,255,.03);
  overflow:hidden;
}
.nav-group summary{
  cursor:pointer;
  list-style:none;
  padding:10px 12px;
  font-weight:900;
  display:flex;
  align-items:center;
  gap:10px;
}
.nav-group summary::-webkit-details-marker{ display:none; }
.dot{
  width:10px; height:10px; border-radius:999px;
  background: var(--red);
  box-shadow: 0 0 0 3px rgba(200,16,46,.18);
}
.nav-group ul{ margin:0; padding:0 0 10px 0; list-style:none; }
.nav-group li a{
  display:block;
  padding:8px 12px;
  color: rgba(255,255,255,.86);
  border-left: 3px solid transparent;
}
.nav-group li a:hover{
  background: rgba(255,255,255,.05);
  border-left-color: var(--red);
  text-decoration:none;
}
.nav-group li:first-child a{ font-weight:800; color:#fff; }

.main{ padding:22px 22px 26px; }
.topbar{
  padding:16px 18px;
  border:1px solid var(--stroke);
  border-radius: var(--radius);
  background: rgba(255,255,255,.04);
  box-shadow: 0 10px 20px rgba(0,0,0,.16);
}
.h1{ margin:0; font-size: 26px; }
.sub{ margin:6px 0 0; color: rgba(255,255,255,.72); font-weight:600; }
.breadcrumb{
  margin-top:14px;
  color: rgba(255,255,255,.70);
  font-weight:700;
  font-size: 13px;
}
.breadcrumb a{ color: rgba(255,255,255,.88); }
.breadcrumb span{ color: rgba(255,255,255,.58); }

.grid{
  margin-top:16px;
  display:grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap:14px;
}
.card{
  background:#fff;
  color: var(--ink);
  border-radius: var(--radius);
  overflow:hidden;
  box-shadow: var(--shadow);
  border: 1px solid rgba(31,42,68,.18);
}
.card-h{
  background: var(--red);
  color:#fff;
  font-weight:900;
  padding:10px 12px;
  font-size: 13px;
}
.card-b{ padding:12px 12px 14px; font-size: 13px; line-height:1.35; }

.list{ margin:0; padding-left:18px; }
.list li{ margin:4px 0; }

.pillrow{ margin-top:14px; display:flex; justify-content:center; }
.footerpill{
  padding:10px 14px;
  border-radius: 999px;
  border: 1px solid rgba(255,255,255,.16);
  background: rgba(0,0,0,.18);
  color: rgba(255,255,255,.9);
  font-weight:900;
  letter-spacing:.08em;
  text-align:center;
}

@media (max-width:1100px){
  .app{ grid-template-columns: 1fr; }
  .sidebar{ position:relative; height:auto; }
  .grid{ grid-template-columns: repeat(2, minmax(0,1fr)); }
}
@media (max-width:720px){
  .grid{ grid-template-columns: 1fr; }
  .h1{ font-size: 22px; }
}
