import { CriminalList } from './criminals/CriminalList.js'
import { ConvictionSelect } from './convictions/ConvictionSelect.js'
import { OfficerSelect } from './officers/OfficerSelect.js'
import { NoteForm } from './notes/noteForm.js'
import { ShowNoteButton } from './notes/ShowNotesButton.js'
import './notes/NoteList.js'
import './alibis/AlibiProvider.js'
import { ShowWitnessesButton } from './witnesess/ShowWitnessButton.js'
import { WitnessList } from './witnesess/WitnessList.js'
import { getCriminals } from './criminals/CriminalDataProvider.js'
import { ShowFacilitiesButton } from './facilities/ShowFacilitiesButton.js'
getCriminals()
    .then(NoteForm)


CriminalList()
ConvictionSelect()
OfficerSelect()

// NoteForm()
ShowNoteButton()
ShowWitnessesButton()
ShowFacilitiesButton()
// WitnessList()
// ShowAlibiButton()