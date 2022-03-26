import { NgModule } from '@angular/core';
import { NbMenuModule, NbListModule, NbCardModule, NbInputModule,NbButtonModule, } from '@nebular/theme';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { TopicComponent } from './topic/topic.component';
import { TopstoriesComponent } from './topstories/topstories.component';
import { ForyouComponent } from './foryou/foryou.component';
import { MyComponent } from './my/my.component';
import { SettingsComponent } from './settings/settings.component';
import { LibraryComponent } from './my/library/library.component';
import { SearchesComponent } from './my/searches/searches.component';
import { BookmarksComponent } from './my/bookmarks/bookmarks.component';
import { StoriesComponent } from './stories/stories.component';
import { LocationsComponent } from './my/locations/locations.component';
import { SubmitComponent } from './submit/submit.component';
import { WebsiteComponent } from './website/website.component';
import { PopupCellRenderer } from './website/popup-cell-renderer/popup-cell-renderer.component';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    NbListModule,
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    AgGridModule.withComponents([PopupCellRenderer]),
  ],
  declarations: [
    PagesComponent,
    TopicComponent,
    TopstoriesComponent,
    ForyouComponent,
    MyComponent,
    SettingsComponent,
    LibraryComponent,
    SearchesComponent,
    BookmarksComponent,
    StoriesComponent,
    LocationsComponent,
    SubmitComponent,
    WebsiteComponent,
  ],
})
export class PagesModule {
}
