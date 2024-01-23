import * as React from 'react';
import {useEffect, useState} from 'react';
import EducationTypePie from '../../components/EducationTypePie';
import {Box, Paper, Typography} from '@mui/material';
import AgeRangePie from '../../components/AgeRangePie';

function calculateAge(dateOfBirth) {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}


function countUsersWithFieldValue(users, fieldName, value) {
    return users.reduce((count, user) => {
        if (user[fieldName] === value) {
            return count + 1;
        }
        return count;
    }, 0);
}

function countUsersWithAgeInRange(users, minValue, maxValue) {
    return users.reduce((count, user) => {
        const age = calculateAge(user.dataNasc);
            if (age >= minValue && age <= maxValue) {
                return count + 1;
            }
            if (age > minValue && age < maxValue) {
                return count + 1;
            }
        return count;
    }, 0);
}

function countUsersWithFieldValueInRange(users, fieldName, minValue, maxValue, inclusive = true) {
    return users.reduce((count, user) => {
        const value = user[fieldName];
        if (inclusive) {
            if (value >= minValue && value <= maxValue) {
                return count + 1;
            }
        } else {
            if (value > minValue && value < maxValue) {
                return count + 1;
            }
        }
        return count;
    }, 0);
}

const DashboardMain = () => {
    const [dataForms, setDataForms] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://nodered.pdcloud.dev/formsTotalCompleto');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setDataForms(data);
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
            }
            setLoading(false);
        };
        fetchData();
    }, []);

    // Renderize seu componente aqui...

    if (loading) {
        return <div>Carregando...</div>;
    }
    
    console.log(dataForms);

    const countPublica = countUsersWithFieldValue(dataForms, 'escolaPublica', true);
    const countPrivada = countUsersWithFieldValue(dataForms, 'escolaPublica', null);
  
    const countAge15to18 = countUsersWithAgeInRange(dataForms, 15, 18);
    const countAge19to25 = countUsersWithAgeInRange(dataForms, 19, 25);
    const countAge26to35 = countUsersWithAgeInRange(dataForms, 26, 35);
    const countAge35Plus = countUsersWithAgeInRange(dataForms, 36, 100);

    const countMenorQue1 = countUsersWithFieldValue(dataForms, 'rendaFamiliar', 'InferiorAUmSalarioMinimo')
    const countDe1a3 = countUsersWithFieldValue(dataForms, 'rendaFamiliar', 'De1a3SalariosMinimos')
    const countDe3a10 = countUsersWithFieldValue(dataForms, 'rendaFamiliar', 'De3a10SalariosMinimos')
    const countDe10a40 = countUsersWithFieldValue(dataForms, 'rendaFamiliar', 'De10a40SalariosMinimos')
    const countMaiorQue40 = countUsersWithFieldValue(dataForms, 'rendaFamiliar', 'MaisDe40SalariosMinimos')


    return (
        <Box sx={{ 
            flexGrow: 1,
            width: '100%',
            height: '100%',
            backgroundColor: '#F5F5F5', 
        }}>
            <Paper sx={
            {
                p: 2,
                display: 'flex',
                mx: 'auto',
                flexDirection: 'column',
                alignItems: 'center',
                height: '90%',
                width: '80%',
                margin: 'auto',
            }
        }>
                <Typography variant='h2' fontWeight={'bold'}>Dashboard</Typography>
                <Typography variant='h5' textAlign={'center'} fontWeight={'bold'} my={2}>Escola Pública x Escola Particular</Typography>
                <EducationTypePie nomeLabel1={'Escola Publica'} qtdLabel1={countPublica} nomeLabel2={'Particular'} qtdLabel2={countPrivada}/>
                <Typography variant='h5' fontWeight={'bold'} my={2}>Faixa Etária</Typography>
                <AgeRangePie qtdLabel1={countAge15to18} qtdLabel2={countAge19to25} qtdLabel3={countAge26to35} qtdLabel4={countAge35Plus}/>
            </Paper>
        </Box>
    )
}

export default DashboardMain;