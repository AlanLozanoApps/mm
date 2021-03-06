import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { BlogPostComponent } from './components/blog-post/blog-post.component';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'nosotros', loadChildren: './pages/nosotros/nosotros.module#NosotrosPageModule' },
  { path: 'meetings', loadChildren: './pages/meetings/meetings.module#MeetingsPageModule' },
  { path: 'servicios', loadChildren: './pages/servicios/servicios.module#ServiciosPageModule' },
  { path: 'blog', loadChildren: './pages/blog/blog.module#BlogPageModule' },
  { path: 'contacto', loadChildren: './pages/contacto/contacto.module#ContactoPageModule' },
  { path: 'aniversarios', loadChildren: './pages/meetings/aniversarios/aniversarios.module#AniversariosPageModule' },
  { path: 'conferencias', loadChildren: './pages/meetings/conferencias/conferencias.module#ConferenciasPageModule' },
  { path: 'exposiciones', loadChildren: './pages/meetings/exposiciones/exposiciones.module#ExposicionesPageModule' },
  { path: 'lanzamientos', loadChildren: './pages/meetings/lanzamientos/lanzamientos.module#LanzamientosPageModule' },
  { path: 'plenarias', loadChildren: './pages/meetings/plenarias/plenarias.module#PlenariasPageModule' },
  { path: 'premiaciones', loadChildren: './pages/meetings/premiaciones/premiaciones.module#PremiacionesPageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'perfil', loadChildren: './pages/perfil/perfil.module#PerfilPageModule' },
  { path: 'post/:url', component: BlogPostComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
