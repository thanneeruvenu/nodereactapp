import React,{useState} from 'react';
import { Dropdown, DropdownItem } from '@hedtech/react-design-system/core';


function ControlledDropdownExample(props)  {
    const [dropDownParams, setDropDownParams] = useState({
        degrees: '',
        initialValue: 'null',
        open : false
      });
    
    
    let handleChange = event => {
        const valueIsNone = event.target.value === 'None';
        if (valueIsNone) {
            setDropDownParams({
                degrees: dropDownParams.initialValue,
                initialValue: 'null',
                open : false
            });
        } else {
            setDropDownParams({
                degrees: event.target.value,
                initialValue: 'null',
                open : false
            });
        }
    };

        const customId = 'ControlledDropdownExample';
        const stringOptions = [
            'Mechanical Engineering',
            'Environmental and Energy Management',
            'Renewable Energy Engineering',
            'Electrical Engineering',
            'Biomedical System Engineering',
            'Civil Engineering/Civil Engineering Technician',
            'Information Science and Engineering',
        ];

        return (
            <div>
               
                <Dropdown
                    id={`${customId}_Dropdown`}
                    label="Degrees..."
                    onChange={handleChange}
                    value={dropDownParams.degrees}
                    open={dropDownParams.open}
                    onOpen={(event) => {
                        console.log('*** onOpen handler called ***', event);
                        setDropDownParams({ degrees: dropDownParams.initialValue,
                            initialValue: 'null',
                            open: true });
                    }}
                    onClose={(event) => {
                        console.log('*** onClose handler called ***', event);
                        setDropDownParams({ open: false });
                    }}
                >
                    <DropdownItem
                        label="None"
                        value="None"
                    />
                    {stringOptions.map(option => {
                        return (
                            <DropdownItem
                                key={option}
                                label={option}
                                value={option}
                            />
                        );
                    })}
                </Dropdown>
            </div>
        );
}

export default ControlledDropdownExample;