import { ErrorHandlerService } from './services/error-handler.service';
import { HeaderComponent } from './components/navigation/header/header.component';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { RoutingModule } from './routing/routing.module';
import { HomeComponent } from './components/home/home.component';
import { SidenavListComponent } from './components/navigation/sidenav-list/sidenav-list.component';
import { AboutComponent } from './components/about/about.component';
import { SearchLeagueComponent } from './components/league/search-league/search-league.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import '@angular/common/locales/global/pl';
import { LOCALE_ID } from '@angular/core';
import { LeagueItemComponent } from './components/league/league-item/league-item.component';
import { CreateLeagueComponent } from './components/league/create-league/create-league.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HelpDialogComponent } from './components/commons/help-dialog/help-dialog.component';
import { ExistingPlayerComponent } from './components/player/existing-player/existing-player.component';
import { HttpClientModule } from '@angular/common/http';
import { AddPlayersComponent } from './components/player/forms/add-players/add-players.component';
import { ErrorComponent } from './components/error/error.component';
import { NewPlayerComponent } from './components/player/new-player/new-player.component';
import { InitLeagueComponent } from './components/league/init-league/init-league.component';
import { PageNotFoundComponent } from './components/commons/page-not-found/page-not-found.component';
import { CustomProgressBarComponent } from './components/commons/custom-progress-bar/custom-progress-bar.component';
import { ContentFrameComponent } from './components/league/content-frame/content-frame.component';
import { HeaderPanelComponent } from './components/commons/header-panel/header-panel.component';
import { LeagueNewsComponent } from './components/league/league-news/league-news.component';
import { TableComponent } from './components/league/table/table.component';
import { MatchItemComponent } from './components/match/match-item/match-item.component';
import { SeasonListComponent } from './components/season/season-list/season-list.component';
import { StatisticsComponent } from './components/league/statistics/statistics.component';
import { PlayerDetailsComponent } from './components/player/player-details/player-details.component';
import { PlayerListComponent } from './components/player/player-list/player-list.component';
import { PlayerItemComponent } from './components/player/player-item/player-item.component';
import { MatchListComponent } from './components/match-list/match-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SidenavListComponent,
    AboutComponent,
    SearchLeagueComponent,
    LeagueItemComponent,
    CreateLeagueComponent,
    HelpDialogComponent,
    ExistingPlayerComponent,
    AddPlayersComponent,
    ErrorComponent,
    NewPlayerComponent,
    InitLeagueComponent,
    PageNotFoundComponent,
    CustomProgressBarComponent,
    ContentFrameComponent,
    HeaderPanelComponent,
    LeagueNewsComponent,
    MatchItemComponent,
    SeasonListComponent,
    StatisticsComponent,
    TableComponent,
    PlayerDetailsComponent,
    PlayerListComponent,
    PlayerItemComponent,
    MatchListComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    RoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pl-PL' },
    { provide: ErrorHandler, useClass: ErrorHandlerService },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
