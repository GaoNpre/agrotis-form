import { useState } from 'react';
import * as S from './styles';
import TextField from '@material-ui/core/TextField';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Button from '@material-ui/core/Button';
import FormHelperText from '@material-ui/core/FormHelperText';
import Autocomplete from '@material-ui/lab/Autocomplete';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const Form = () => {
  const NAME_CHARACTER_LIMIT = 40;
  const OBS_CHARACTER_LIMIT = 1000;
  const vertical = 'bottom';
  const horizontal = 'center';

  const [successSnackbar, setSuccessSnackbar] = useState({ open: false });
  const [invalidSnackbar, setInvalidSnackbar] = useState({ open: false });

  const [invalidFieldIds, setInvalidFieldIds] = useState({
    nameField: false,
    initialDateField: false,
    finalDateField: false,
    propertyField: false,
    laboratoryField: false,
    obsField: false,
  });

  // Fields states
  const [name, setName] = useState('');
  const [initialDate, setInitialDate] = useState(new Date());
  const [finalDate, setFinalDate] = useState(new Date());
  const [property, setProperty] = useState({ 
    id: "",
    name: "",
    cnpj: ""
  });
  const [laboratory, setLaboratory] = useState({ 
    id: "",
    name: ""
  });
  const [obs, setObs] = useState('');

  // Form fields variable
  let formValues = { 
    nome: '',
    dataInicial: '',
    dataFinal: '',
    infosPropriedade: {
        id: 0,
        nome: ''
    },
    cnpj: '',
    laboratorio: {
        id: 0,
        nome: ''
    },
    observacoes: ''
  };

  const handleNameFieldChange = event => {
    setName(event.target.value);
  };

  const handleInitialDateChange = date => {
    setInvalidFieldIds({...invalidFieldIds, initialDateField: false});
    setInitialDate(date ? date.toISOString() : '');
  };

  const handleFinalDateChange = date => {
    setInvalidFieldIds({...invalidFieldIds, finalDateField: false});
    setFinalDate(date ? date.toISOString() : '');
  };

  const handlePropertiesComboChange = (_, value) => {
    if(value){
      setProperty({
        id: value.id,
        name: value.name,
        cnpj: value.cnpj
      });
    } else {
      setProperty({
        id: '',
        name: '',
        cnpj: ''
      });
    }
  };

  const handleLabsComboChange = (_, value) => {
    if(value){
      setLaboratory({
        id: value.id,
        name: value.name
      });
    } else {
      setLaboratory({
        id: '',
        name: ''
      });
    }
  };

  const handleObsFieldChange = event => {
    setObs(event.target.value);
  };

  const handleCloseSuccessSnackbar = () => {
    setSuccessSnackbar({ ...successSnackbar, open: false });
  };

  const handleOpenInvalidSnackbar = event => {
    event.preventDefault();
    setInvalidFieldIds({...invalidFieldIds, [event.target.id]: true});
    setInvalidSnackbar({ open: true });
  };

  const handleFieldFocus = event => {
    setInvalidFieldIds({...invalidFieldIds, [event.target.id]: false});
  };

  const handleCloseInvalidSnackbar = () => {
    setInvalidSnackbar({ open: false });
  };

  const handleOnSubmit = event => {
    event.preventDefault();
    setSuccessSnackbar({ open: true });

    formValues = { 
      nome: name,
      dataInicial: initialDate,
      dataFinal: finalDate,
      infosPropriedade: {
          id: property.id,
          nome: property.name
      },
      cnpj: property.cnpj,
      laboratorio: {
          id: laboratory.id,
          nome: laboratory.name
      },
      observacoes: obs
    };

    // PRINT THE RESULT!!! UHUUUUL!! WEEEE!!!
    console.log('%c ' + JSON.stringify(formValues, null, 4), 'font-size: 16px; color: #00796B');
  };

  // Mocked data:
  const propertiesMock = [
    { id: 1, name: 'Agrotis 1', cnpj: '04.909.987/0001-81' },
    { id: 2, name: 'Agrotis 2', cnpj: '04.909.987/0001-82' },
    { id: 3, name: 'Agrotis 3', cnpj: '04.909.987/0001-83' },
    { id: 4, name: 'Agrotis 4', cnpj: '04.909.987/0001-84' },
    { id: 5, name: 'Agrotis 5', cnpj: '04.909.987/0001-85' },
    { id: 6, name: 'Agrotis 6', cnpj: '04.909.987/0001-86' },
  ];
  const labsMock  = [
    { id: 1, name: 'Skyrim Agro' },
    { id: 2, name: 'Tamriel Agro' },
    { id: 3, name: 'Riverwood Agro' },
    { id: 4, name: 'Agro Brasil' },
    { id: 5, name: 'Agro Skynet' },
    { id: 6, name: 'Umbrella Agro' },
    { id: 7, name: 'Osborn Agro' },
  ];

  return (
    <S.Container>
      <S.FormHeader>
        <label>Teste front-end</label>
        <Button type="submit" variant="contained" form="form">SALVAR</Button>
      </S.FormHeader>
      <S.FormBody onSubmit={(event) => handleOnSubmit(event)} id="form" onInvalid={(event) => handleOpenInvalidSnackbar(event)}>
        
        <TextField
          error={invalidFieldIds.nameField}
          id="nameField"
          label="Nome"
          className="item-1"
          size="small"
          inputProps={{
            maxLength: NAME_CHARACTER_LIMIT
          }}
          helperText={invalidFieldIds.nameField ? "Error" : `${name.length}/${NAME_CHARACTER_LIMIT}`}
          FormHelperText={"teste"}
          value={name}
          onChange={handleNameFieldChange}
          onFocus={handleFieldFocus}
          required
        />

        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            error={invalidFieldIds.initialDateField}
            id="initialDateField"
            required
            disableToolbar
            variant="inline"
            format="dd/MM/yyyy"
            margin="normal"
            className="item-2"
            label="Data Inicial"
            value={initialDate}
            onChange={handleInitialDateChange}
            onFocus={handleFieldFocus}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />

          <KeyboardDatePicker
            error={invalidFieldIds.finalDateField}
            helperText={invalidFieldIds.finalDateField ? "Invalid Date Format" : "info"}
            id="finalDateField"
            required
            disableToolbar
            variant="inline"
            format="dd/MM/yyyy"
            margin="normal"
            className="item-3"
            label="Data Final"
            value={finalDate}
            onChange={handleFinalDateChange}
            onFocus={handleFieldFocus}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </MuiPickersUtilsProvider>

        <div className="item-4">
          <Autocomplete
            id="propertyField"
            error={invalidFieldIds.propertyField}
            noOptionsText="No options"
            onChange={(_, value) => handlePropertiesComboChange(_, value)}
            onFocus={handleFieldFocus}
            getOptionSelected={(option, value) => option.id === value.id}
            options={propertiesMock}
            getOptionLabel={(option) => option.name}
            renderOption={(option) => (
              <S.ComboCustomOption className="autocomplete-options">
                <div className="combo-custom-option-top">{option.name}</div>
                <div className="combo-custom-option-bottom">CNPJ {option.cnpj}</div>
              </S.ComboCustomOption>
            )}
            renderInput={(params) => (
              <TextField error={invalidFieldIds.propertyField} {...params} label="Propriedade" margin="normal" required/>
            )}
          />
          <FormHelperText error={invalidFieldIds.propertyField} className="properties-combo-helper-text">CNPJ {property.cnpj}</FormHelperText>
        </div>

        <div className="item-5">
          <Autocomplete
            id="laboratoryField"
            error={invalidFieldIds.laboratoryField}
            noOptionsText="No options"
            onChange={(_, value) => handleLabsComboChange(_, value)}
            onFocus={handleFieldFocus}
            getOptionSelected={(option, value) => option.id === value.id}
            options={labsMock}
            getOptionLabel={(option) => option.name}
            renderOption={(option) => (<div>{option.name}</div>)}
            renderInput={(params) => (
              <TextField error={invalidFieldIds.laboratoryField} {...params} label="Laboratório" margin="normal" required/>
            )}
          />
          <FormHelperText error={invalidFieldIds.laboratoryField} className="properties-combo-helper-text">{invalidFieldIds.laboratoryField ? "Error" : ""}</FormHelperText>
        </div>

        <TextField
          id="obsField"
          label="Observação"
          className="item-6"
          size="small"
          multiline
          minRows={4}
          inputProps={{
            maxLength: OBS_CHARACTER_LIMIT
          }}
          helperText={`${obs.length}/${OBS_CHARACTER_LIMIT}`}
          value={obs}
          onChange={handleObsFieldChange}
          onInvalid={(event) => handleOpenInvalidSnackbar(event)}
        />

        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          autoHideDuration={3000}
          open={successSnackbar.open}
          onClose={handleCloseSuccessSnackbar}
          key={1}
        >
          <MuiAlert variant="filled" onClose={handleCloseSuccessSnackbar} severity="success">
            Cadastro realizado com sucesso!
          </MuiAlert>
        </Snackbar>

        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          autoHideDuration={3000}
          open={invalidSnackbar.open}
          onClose={handleCloseInvalidSnackbar}
          key={2}
        >
          <MuiAlert variant="filled" onClose={handleCloseInvalidSnackbar} severity="error">
            Preencha os campos obrigatórios!
          </MuiAlert>
        </Snackbar>
        
      </S.FormBody>
    </S.Container>
  );
}
  
export default Form;