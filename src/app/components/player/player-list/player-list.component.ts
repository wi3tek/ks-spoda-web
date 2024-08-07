import { NewPlayer, PlayerService } from './../../../services/player.service';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Player } from 'src/app/model/player';
import { NewPlayerComponent } from '../new-player/new-player.component';
import { PlayerDetailsComponent } from '../player-details/player-details.component';
import { NewLeaguePlayerComponent } from '../new-league-player/new-league-player.component';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css'],
})
export class PlayerListComponent {
  @Input() chosenPlayer!: Player | null;
  @Input() playerList: Player[] | null = [];
  @Input() leagueId: number = -1;
  @Output() addedPlayerOutput = new EventEmitter<void>();
  editModeEnabled: boolean = false;

  @ViewChild('playerDetailsRef') playerDetailsRef!: PlayerDetailsComponent;

  takeEmittedPlayer(player: Player | null) {
    this.chosenPlayer = player;
    this.playerDetailsRef.editModeEnabled = false;
  }

  constructor(public dialog: MatDialog, private playerService: PlayerService) {}

  addNewPlayer(): void {
    if (this.playerList == null) {
      return;
    }

    let playerAliases = this.playerList.map((player) => {
      return player.alias.toUpperCase();
    });

    const dialogRef = this.dialog.open(NewLeaguePlayerComponent, {
      data: {
        playerAliases: playerAliases,
      },
      position: { top: '30px' },
      disableClose: true,
    });

    dialogRef.componentInstance.outputPlayerForm.subscribe((value) => {
      let newPlayer: NewPlayer = {
        name: value.get('name')?.value,
        alias: value.get('alias')?.value,
        playerImg: value.get('playerImg')?.value,
        leagueId: this.leagueId,
        playerId: value.get('playerId')?.value,
      };

      this.playerService.addPlayer(newPlayer).subscribe({
        complete: () => {
          console.log('playerSaveComplete');
          this.addedPlayerOutput.emit();
          dialogRef.close(() => {
            console.log('Dialog closed hehe');
          });
        },
      });
    });
  }

  closeEditMode() {
    'ZAMYKAM EDYCJE';
    this.editModeEnabled = false;
  }

  calculateOverflow() {
    let playerListLength: number = this.playerList?.length
      ? this.playerList.length
      : 0;

    return playerListLength < 7 ? 'none' : '';
  }
}
