import { Routes } from '@angular/router';
import { Autocomplete } from './components/autocomplete/autocomplete';
import { Badge } from './components/badge/badge';
import { Bottomsheet } from './components/bottomsheet/bottomsheet';
import { Buttons } from './components/buttons/buttons';
import { ButtonToggle } from './components/button-toggle/button-toggle';
import { Card } from './components/card/card';
import { Checkbox } from './components/checkbox/checkbox';
import { Chip } from './components/chip/chip';
import { Datepicker } from './components/datepicker/datepicker';
import { Dailog } from './dailog/dailog';
import { ExpansionPanel } from './components/expansion-panel/expansion-panel';
import { FormField } from './components/form-field/form-field';
import { GridList } from './components/grid-list/grid-list';
import { List } from './components/list/list';

export const routes: Routes = [
  {path:'autoCompelete',component:Autocomplete},
  {path:'badge',component:Badge},
  {path:'bottom-sheet',component:Bottomsheet},
  {path:'buttons',component:Buttons},
  {path:'button-toggle',component:ButtonToggle},
  {path:'card',component:Card},
  {path:'checkbox',component:Checkbox},
  {path:'chip',component:Chip},
  {path:'datepicker',component:Datepicker},
  {path:'dailog',component:Dailog},
  {path:'expansion-panel',component:ExpansionPanel},
  {path:'form-field',component:FormField},
  {path:'grid-list',component:GridList},
  {path:'list',component:List},
];
