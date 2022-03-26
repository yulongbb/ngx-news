import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { TopicComponent } from './topic/topic.component';
import { TopstoriesComponent } from './topstories/topstories.component';
import { ForyouComponent } from './foryou/foryou.component';
import { MyComponent } from './my/my.component';
import { BookmarksComponent } from './my/bookmarks/bookmarks.component';
import { LibraryComponent } from './my/library/library.component';
import { LocationsComponent } from './my/locations/locations.component';
import { SearchesComponent } from './my/searches/searches.component';
import { SettingsComponent } from './settings/settings.component';
import { StoriesComponent } from './stories/stories.component';
import { SubmitComponent } from './submit/submit.component';
import { WebsiteComponent } from './website/website.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'topics/:category',
      component: TopicComponent,
    },
    {
      path: 'topstories',
      component: TopstoriesComponent,
    },
    {
      path: 'foryou',
      component: ForyouComponent,
    },
    {
      path: 'my',
      component: MyComponent,
      children: [
        {
          path: 'bookmarks',
          component: BookmarksComponent,
        },
        {
          path: 'library',
          component: LibraryComponent,
        },
        {
          path: 'locations',
          component: LocationsComponent,
        },
        {
          path: 'searches',
          component: SearchesComponent,
        },
      ]
    },
    {
      path: 'website',
      component: WebsiteComponent,
    },
    {
      path: 'settings',
      component: SettingsComponent,
    },
    {
      path: 'stories',
      component: StoriesComponent,
    },
    {
      path: 'submit',
      component: SubmitComponent,
    },
   ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
