import * as React from 'react';
import EducationTypePie from '../../components/EducationTypePie';
import {Box, Paper, Typography} from '@mui/material';
import AgeRangePie from '../../components/AgeRangePie';
const mockData = [
    {
        "id": "46beb134-4d29-45aa-9475-071a1b8521b6",
        "nomeCompleto": "Atila de freitas",
        "cpf": "13225040401",
        "dataNasc": "1998-01-26",
        "usoDeDados": null,
        "genero": "Masculino",
        "pcd": "NaoPossui",
        "cep": null,
        "rua": null,
        "bairro": null,
        "numero": null,
        "complemento": null,
        "cel": null,
        "celResponsavel": null,
        "operadora": null,
        "email": null,
        "profissao": null,
        "estadoCivil": null,
        "religiao": null,
        "rendaFamiliar": null,
        "escolaPublica": null,
        "raca": null,
        "escolaridade": null,
        "nomeFaculdade": null,
        "periodoFaculdade": null,
        "cota": null,
        "tipoPcd": null,
        "cadastroCompleto": false,
        "practiceTestId": null,
        "testId": null,
        "createdAt": "2024-01-11T19:51:18.226Z",
        "city": {
            "id": "b4c0bf14-2472-4f48-ae5e-5c16e5e592ed",
            "nome": "Bom Despacho",
            "status": true,
            "minimunAge": 15,
            "state": {
                "id": "a2d5c8bd-c162-461f-9ee0-3a60e4f2f222",
                "nome": "Minas Gerais",
                "status": true
            }
        },
        "examHour": null,
        "examDate": null,
        "exam": null
    },
    {
        "id": "bee0c129-f8f7-42b1-89b4-6e3987e9ef83",
        "nomeCompleto": "BERNARDO VARGAS RODELA",
        "cpf": "09348523678",
        "dataNasc": "2001-10-06",
        "usoDeDados": true,
        "genero": "Masculino",
        "pcd": "Auditiva",
        "cep": "30140130",
        "rua": "Rua Tomé de Souza",
        "bairro": "Savassi",
        "numero": "70",
        "complemento": "não tem complemento",
        "cel": null,
        "celResponsavel": null,
        "operadora": null,
        "email": null,
        "profissao": null,
        "estadoCivil": null,
        "religiao": null,
        "rendaFamiliar": "De1a3SalariosMinimos",
        "escolaPublica": true,
        "raca": "Branca",
        "escolaridade": null,
        "nomeFaculdade": null,
        "periodoFaculdade": null,
        "cota": "Pcd",
        "tipoPcd": "5548",
        "cadastroCompleto": false,
        "practiceTestId": null,
        "testId": null,
        "createdAt": "2024-01-12T19:34:21.720Z",
        "city": {
            "id": "fff8531c-9620-4dc2-8788-b8bf1718c011",
            "nome": "Belo Horizonte",
            "status": false,
            "minimunAge": 15,
            "state": {
                "id": "a2d5c8bd-c162-461f-9ee0-3a60e4f2f222",
                "nome": "Minas Gerais",
                "status": true
            }
        },
        "examHour": {
            "id": "f97582ce-e6c4-4a4d-8315-10585caa96e4",
            "horario": "10:00:00",
            "active": true,
            "localDaProva": {
                "id": "f7a48ce6-d7bc-4b3c-8351-8bed0a2bfb8c",
                "localDaProva": "Escola Municipal Coronel Praxedes",
                "rua": "Rua Miguel Dias",
                "bairro": "Centro",
                "numero": "40",
                "complemento": null,
                "limiteDeInscritos": 20
            },
            "examDate": {
                "id": "ac223fa1-4348-4444-b389-43c5347e06b9",
                "data": "2024-01-17",
                "active": false,
                "localDaProva": {
                    "id": "f7a48ce6-d7bc-4b3c-8351-8bed0a2bfb8c",
                    "localDaProva": "Escola Municipal Coronel Praxedes",
                    "rua": "Rua Miguel Dias",
                    "bairro": "Centro",
                    "numero": "40",
                    "complemento": null,
                    "limiteDeInscritos": 20
                }
            }
        },
        "examDate": {
            "id": "ac223fa1-4348-4444-b389-43c5347e06b9",
            "data": "2024-01-17",
            "active": false,
            "localDaProva": {
                "id": "f7a48ce6-d7bc-4b3c-8351-8bed0a2bfb8c",
                "localDaProva": "Escola Municipal Coronel Praxedes",
                "rua": "Rua Miguel Dias",
                "bairro": "Centro",
                "numero": "40",
                "complemento": null,
                "limiteDeInscritos": 20
            }
        },
        "exam": {
            "id": "f7a48ce6-d7bc-4b3c-8351-8bed0a2bfb8c",
            "localDaProva": "Escola Municipal Coronel Praxedes",
            "rua": "Rua Miguel Dias",
            "bairro": "Centro",
            "numero": "40",
            "complemento": null,
            "limiteDeInscritos": 20
        }
    },
    {
        "id": "a68cf0d1-fee8-4e29-a5bb-a7f0526bf93e",
        "nomeCompleto": "ARTHUR XAVIER COSTA",
        "cpf": "13749093601",
        "dataNasc": "2003-07-14",
        "usoDeDados": true,
        "genero": null,
        "pcd": null,
        "cep": "35634382",
        "rua": "Abaeté",
        "bairro": "Santa Marta",
        "numero": "752",
        "complemento": "não tem complemento",
        "cel": null,
        "celResponsavel": null,
        "operadora": null,
        "email": null,
        "profissao": null,
        "estadoCivil": null,
        "religiao": null,
        "rendaFamiliar": null,
        "escolaPublica": null,
        "raca": null,
        "escolaridade": null,
        "nomeFaculdade": null,
        "periodoFaculdade": null,
        "cota": null,
        "tipoPcd": null,
        "cadastroCompleto": false,
        "practiceTestId": null,
        "testId": null,
        "createdAt": "2024-01-16T19:12:58.450Z",
        "city": {
            "id": "b4c0bf14-2472-4f48-ae5e-5c16e5e592ed",
            "nome": "Bom Despacho",
            "status": true,
            "minimunAge": 15,
            "state": {
                "id": "a2d5c8bd-c162-461f-9ee0-3a60e4f2f222",
                "nome": "Minas Gerais",
                "status": true
            }
        },
        "examHour": null,
        "examDate": null,
        "exam": null
    },
    {
        "id": "16ecf2e3-efa2-4677-b552-fa31524a466b",
        "nomeCompleto": "BERNARDO AMARAL LIMA",
        "cpf": "12573115658",
        "dataNasc": "2002-04-20",
        "usoDeDados": true,
        "genero": null,
        "pcd": null,
        "cep": "35630001",
        "rua": "jshhss",
        "bairro": "nansnsn",
        "numero": "2727",
        "complemento": "1727",
        "cel": null,
        "celResponsavel": null,
        "operadora": null,
        "email": null,
        "profissao": null,
        "estadoCivil": null,
        "religiao": null,
        "rendaFamiliar": null,
        "escolaPublica": null,
        "raca": null,
        "escolaridade": null,
        "nomeFaculdade": null,
        "periodoFaculdade": null,
        "cota": null,
        "tipoPcd": null,
        "cadastroCompleto": false,
        "practiceTestId": null,
        "testId": null,
        "createdAt": "2024-01-15T22:13:03.663Z",
        "city": {
            "id": "b4c0bf14-2472-4f48-ae5e-5c16e5e592ed",
            "nome": "Bom Despacho",
            "status": true,
            "minimunAge": 15,
            "state": {
                "id": "a2d5c8bd-c162-461f-9ee0-3a60e4f2f222",
                "nome": "Minas Gerais",
                "status": true
            }
        },
        "examHour": null,
        "examDate": null,
        "exam": null
    },
    {
        "id": "5faadf1d-ec31-476f-9277-4d14f1b0226a",
        "nomeCompleto": "DAVID FELIPE BARROS",
        "cpf": "09652245623",
        "dataNasc": "1987-04-19",
        "usoDeDados": true,
        "genero": null,
        "pcd": null,
        "cep": null,
        "rua": null,
        "bairro": null,
        "numero": null,
        "complemento": null,
        "cel": null,
        "celResponsavel": null,
        "operadora": null,
        "email": null,
        "profissao": null,
        "estadoCivil": null,
        "religiao": null,
        "rendaFamiliar": null,
        "escolaPublica": null,
        "raca": null,
        "escolaridade": null,
        "nomeFaculdade": null,
        "periodoFaculdade": null,
        "cota": null,
        "tipoPcd": null,
        "cadastroCompleto": false,
        "practiceTestId": null,
        "testId": null,
        "createdAt": "2024-01-16T12:19:50.757Z",
        "city": null,
        "examHour": null,
        "examDate": null,
        "exam": null
    },
    {
        "id": "a8c59346-336f-49e5-8d2f-bff6fa370325",
        "nomeCompleto": "FRANCISCO MARQUES GONTIJO LEMOS",
        "cpf": "04529179648",
        "dataNasc": "1981-11-17",
        "usoDeDados": true,
        "genero": null,
        "pcd": null,
        "cep": "35630014",
        "rua": "JOÃO ELEOTÉRIO ",
        "bairro": "CENTRO ",
        "numero": "140",
        "complemento": "AP: 201",
        "cel": null,
        "celResponsavel": null,
        "operadora": null,
        "email": null,
        "profissao": null,
        "estadoCivil": null,
        "religiao": null,
        "rendaFamiliar": null,
        "escolaPublica": null,
        "raca": null,
        "escolaridade": null,
        "nomeFaculdade": null,
        "periodoFaculdade": null,
        "cota": null,
        "tipoPcd": null,
        "cadastroCompleto": false,
        "practiceTestId": null,
        "testId": null,
        "createdAt": "2024-01-16T20:35:08.223Z",
        "city": {
            "id": "b4c0bf14-2472-4f48-ae5e-5c16e5e592ed",
            "nome": "Bom Despacho",
            "status": true,
            "minimunAge": 15,
            "state": {
                "id": "a2d5c8bd-c162-461f-9ee0-3a60e4f2f222",
                "nome": "Minas Gerais",
                "status": true
            }
        },
        "examHour": null,
        "examDate": null,
        "exam": null
    },
    {
        "id": "65504a9d-0df8-41fe-a396-b5dab16e78fb",
        "nomeCompleto": "CAMILA APARECIDA DAS GRACAS SILVA",
        "cpf": "12319311670",
        "dataNasc": "1997-10-23",
        "usoDeDados": true,
        "genero": "Feminino",
        "pcd": "NaoPossui",
        "cep": "35636116",
        "rua": "Ambrosina luquine ",
        "bairro": "São Francisco ",
        "numero": "121",
        "complemento": "Fundos",
        "cel": "+5537999936304",
        "celResponsavel": null,
        "operadora": "Vivo",
        "email": "camilafriendly@gmail.com",
        "profissao": null,
        "estadoCivil": "Solteiro",
        "religiao": "Outros",
        "rendaFamiliar": "De1a3SalariosMinimos",
        "escolaPublica": true,
        "raca": "Parda",
        "escolaridade": null,
        "nomeFaculdade": null,
        "periodoFaculdade": null,
        "cota": "Nenhuma",
        "tipoPcd": null,
        "cadastroCompleto": false,
        "practiceTestId": null,
        "testId": null,
        "createdAt": "2024-01-16T17:03:51.211Z",
        "city": {
            "id": "b4c0bf14-2472-4f48-ae5e-5c16e5e592ed",
            "nome": "Bom Despacho",
            "status": true,
            "minimunAge": 15,
            "state": {
                "id": "a2d5c8bd-c162-461f-9ee0-3a60e4f2f222",
                "nome": "Minas Gerais",
                "status": true
            }
        },
        "examHour": null,
        "examDate": null,
        "exam": null
    },
    {
        "id": "3c6cc4df-912e-4a4c-b950-a764282d032c",
        "nomeCompleto": "RYANDRA NERES DOS SANTOS",
        "cpf": "14439237614",
        "dataNasc": "2004-03-04",
        "usoDeDados": true,
        "genero": "Feminino",
        "pcd": "NaoPossui",
        "cep": "35636468",
        "rua": "Rua Prata ",
        "bairro": "Babilônia ",
        "numero": "35",
        "complemento": "Cas",
        "cel": "+5537991050129",
        "celResponsavel": null,
        "operadora": "TIM",
        "email": "ryandrinha04@gmail.com",
        "profissao": null,
        "estadoCivil": "Solteiro",
        "religiao": "Ateu",
        "rendaFamiliar": "De1a3SalariosMinimos",
        "escolaPublica": true,
        "raca": "Branca",
        "escolaridade": null,
        "nomeFaculdade": null,
        "periodoFaculdade": null,
        "cota": "Nenhuma",
        "tipoPcd": null,
        "cadastroCompleto": false,
        "practiceTestId": null,
        "testId": null,
        "createdAt": "2024-01-16T17:04:07.442Z",
        "city": {
            "id": "b4c0bf14-2472-4f48-ae5e-5c16e5e592ed",
            "nome": "Bom Despacho",
            "status": true,
            "minimunAge": 15,
            "state": {
                "id": "a2d5c8bd-c162-461f-9ee0-3a60e4f2f222",
                "nome": "Minas Gerais",
                "status": true
            }
        },
        "examHour": null,
        "examDate": null,
        "exam": null
    },
    {
        "id": "7243abf2-914b-4ca9-bf2d-4a1fdd547e38",
        "nomeCompleto": "MARIA LETICIA ARAUJO FERREIRA",
        "cpf": "16387484626",
        "dataNasc": "2005-10-19",
        "usoDeDados": true,
        "genero": "Feminino",
        "pcd": "NaoPossui",
        "cep": "35634318",
        "rua": "José Pereira ",
        "bairro": "Rosário 2",
        "numero": "14",
        "complemento": "Casa ",
        "cel": "+5537999475592",
        "celResponsavel": null,
        "operadora": "Vivo",
        "email": "mariaaraujo76052@gmail.com",
        "profissao": null,
        "estadoCivil": "Solteiro",
        "religiao": "Cristianismo",
        "rendaFamiliar": "InferiorAUmSalarioMinimo",
        "escolaPublica": true,
        "raca": "Branca",
        "escolaridade": null,
        "nomeFaculdade": null,
        "periodoFaculdade": null,
        "cota": "Nenhuma",
        "tipoPcd": null,
        "cadastroCompleto": false,
        "practiceTestId": null,
        "testId": null,
        "createdAt": "2024-01-15T23:10:40.694Z",
        "city": {
            "id": "b4c0bf14-2472-4f48-ae5e-5c16e5e592ed",
            "nome": "Bom Despacho",
            "status": true,
            "minimunAge": 15,
            "state": {
                "id": "a2d5c8bd-c162-461f-9ee0-3a60e4f2f222",
                "nome": "Minas Gerais",
                "status": true
            }
        },
        "examHour": {
            "id": "1329c3e6-33dd-48ab-9c1e-eac321969011",
            "horario": "08:00:00",
            "active": true,
            "localDaProva": {
                "id": "f7a48ce6-d7bc-4b3c-8351-8bed0a2bfb8c",
                "localDaProva": "Escola Municipal Coronel Praxedes",
                "rua": "Rua Miguel Dias",
                "bairro": "Centro",
                "numero": "40",
                "complemento": null,
                "limiteDeInscritos": 20
            },
            "examDate": {
                "id": "e5d68d05-7bc1-4ea7-a92d-78c120995557",
                "data": "2024-01-19",
                "active": true,
                "localDaProva": {
                    "id": "f7a48ce6-d7bc-4b3c-8351-8bed0a2bfb8c",
                    "localDaProva": "Escola Municipal Coronel Praxedes",
                    "rua": "Rua Miguel Dias",
                    "bairro": "Centro",
                    "numero": "40",
                    "complemento": null,
                    "limiteDeInscritos": 20
                }
            }
        },
        "examDate": {
            "id": "e5d68d05-7bc1-4ea7-a92d-78c120995557",
            "data": "2024-01-19",
            "active": true,
            "localDaProva": {
                "id": "f7a48ce6-d7bc-4b3c-8351-8bed0a2bfb8c",
                "localDaProva": "Escola Municipal Coronel Praxedes",
                "rua": "Rua Miguel Dias",
                "bairro": "Centro",
                "numero": "40",
                "complemento": null,
                "limiteDeInscritos": 20
            }
        },
        "exam": {
            "id": "f7a48ce6-d7bc-4b3c-8351-8bed0a2bfb8c",
            "localDaProva": "Escola Municipal Coronel Praxedes",
            "rua": "Rua Miguel Dias",
            "bairro": "Centro",
            "numero": "40",
            "complemento": null,
            "limiteDeInscritos": 20
        }
    },
    {
        "id": "eeafe264-63b0-4561-9b1e-24595e65ef1a",
        "nomeCompleto": "DAIANY GOMES FONSECA",
        "cpf": "05875787694",
        "dataNasc": "1982-02-09",
        "usoDeDados": true,
        "genero": "Feminino",
        "pcd": "NaoPossui",
        "cep": "35630012",
        "rua": "Rua clodoaldo de oliveira",
        "bairro": "Centro",
        "numero": "100",
        "complemento": "não tem complemento",
        "cel": "+5537998730803",
        "celResponsavel": null,
        "operadora": "Outros",
        "email": "daianysantaclara@hotmail.com",
        "profissao": null,
        "estadoCivil": "Solteiro",
        "religiao": "Outros",
        "rendaFamiliar": "De1a3SalariosMinimos",
        "escolaPublica": true,
        "raca": "Parda",
        "escolaridade": null,
        "nomeFaculdade": null,
        "periodoFaculdade": null,
        "cota": "EscolaPublica",
        "tipoPcd": null,
        "cadastroCompleto": false,
        "practiceTestId": null,
        "testId": null,
        "createdAt": "2024-01-16T17:38:13.853Z",
        "city": {
            "id": "b4c0bf14-2472-4f48-ae5e-5c16e5e592ed",
            "nome": "Bom Despacho",
            "status": true,
            "minimunAge": 15,
            "state": {
                "id": "a2d5c8bd-c162-461f-9ee0-3a60e4f2f222",
                "nome": "Minas Gerais",
                "status": true
            }
        },
        "examHour": null,
        "examDate": null,
        "exam": null
    },
    {
        "id": "1026f240-5892-47bd-bfba-4e5304faebbb",
        "nomeCompleto": "THIAGO JHONATA PEREIRA",
        "cpf": "12533307602",
        "dataNasc": "2000-01-24",
        "usoDeDados": true,
        "genero": null,
        "pcd": null,
        "cep": null,
        "rua": null,
        "bairro": null,
        "numero": null,
        "complemento": null,
        "cel": null,
        "celResponsavel": null,
        "operadora": null,
        "email": null,
        "profissao": null,
        "estadoCivil": null,
        "religiao": null,
        "rendaFamiliar": null,
        "escolaPublica": null,
        "raca": null,
        "escolaridade": null,
        "nomeFaculdade": null,
        "periodoFaculdade": null,
        "cota": null,
        "tipoPcd": null,
        "cadastroCompleto": false,
        "practiceTestId": null,
        "testId": null,
        "createdAt": "2024-01-16T02:48:09.928Z",
        "city": null,
        "examHour": null,
        "examDate": null,
        "exam": null
    },
    {
        "id": "2aabd9c3-6bf4-4ac3-9426-e3e6135944d9",
        "nomeCompleto": "THIAGO BENTO SILVA",
        "cpf": "14464944620",
        "dataNasc": "2000-12-21",
        "usoDeDados": true,
        "genero": null,
        "pcd": null,
        "cep": null,
        "rua": null,
        "bairro": null,
        "numero": null,
        "complemento": null,
        "cel": null,
        "celResponsavel": null,
        "operadora": null,
        "email": null,
        "profissao": null,
        "estadoCivil": null,
        "religiao": null,
        "rendaFamiliar": null,
        "escolaPublica": null,
        "raca": null,
        "escolaridade": null,
        "nomeFaculdade": null,
        "periodoFaculdade": null,
        "cota": null,
        "tipoPcd": null,
        "cadastroCompleto": false,
        "practiceTestId": null,
        "testId": null,
        "createdAt": "2024-01-16T18:13:08.149Z",
        "city": null,
        "examHour": null,
        "examDate": null,
        "exam": null
    },
    {
        "id": "2c37735f-a6f0-4040-8ff3-de0321124b14",
        "nomeCompleto": "CARLOS EDUARDO GOMES",
        "cpf": "01342470605",
        "dataNasc": "1983-11-10",
        "usoDeDados": true,
        "genero": "Masculino",
        "pcd": "NaoPossui",
        "cep": "35633282",
        "rua": "Rua dos Xavantes ",
        "bairro": "Dom Joaquim",
        "numero": "385",
        "complemento": "casa",
        "cel": "+5537991575836",
        "celResponsavel": null,
        "operadora": "Vivo",
        "email": "ego.gomes44@gmail.com",
        "profissao": null,
        "estadoCivil": "Solteiro",
        "religiao": "Cristianismo",
        "rendaFamiliar": "InferiorAUmSalarioMinimo",
        "escolaPublica": true,
        "raca": "Parda",
        "escolaridade": null,
        "nomeFaculdade": null,
        "periodoFaculdade": null,
        "cota": "EscolaPublica",
        "tipoPcd": null,
        "cadastroCompleto": false,
        "practiceTestId": null,
        "testId": null,
        "createdAt": "2024-01-16T20:55:07.415Z",
        "city": {
            "id": "b4c0bf14-2472-4f48-ae5e-5c16e5e592ed",
            "nome": "Bom Despacho",
            "status": true,
            "minimunAge": 15,
            "state": {
                "id": "a2d5c8bd-c162-461f-9ee0-3a60e4f2f222",
                "nome": "Minas Gerais",
                "status": true
            }
        },
        "examHour": null,
        "examDate": null,
        "exam": null
    },
    {
        "id": "871556f2-8b27-4a26-98fd-ae31abaccd34",
        "nomeCompleto": "CRISTIANE FERREIRA VARGAS",
        "cpf": "06883474609",
        "dataNasc": "1981-04-26",
        "usoDeDados": true,
        "genero": null,
        "pcd": null,
        "cep": "35633116",
        "rua": "Francisco Ribeiro de Resende",
        "bairro": "São José",
        "numero": "902",
        "complemento": "não tem complemento",
        "cel": null,
        "celResponsavel": null,
        "operadora": null,
        "email": null,
        "profissao": null,
        "estadoCivil": null,
        "religiao": null,
        "rendaFamiliar": null,
        "escolaPublica": null,
        "raca": null,
        "escolaridade": null,
        "nomeFaculdade": null,
        "periodoFaculdade": null,
        "cota": null,
        "tipoPcd": null,
        "cadastroCompleto": false,
        "practiceTestId": null,
        "testId": null,
        "createdAt": "2024-01-16T20:46:51.745Z",
        "city": {
            "id": "b4c0bf14-2472-4f48-ae5e-5c16e5e592ed",
            "nome": "Bom Despacho",
            "status": true,
            "minimunAge": 15,
            "state": {
                "id": "a2d5c8bd-c162-461f-9ee0-3a60e4f2f222",
                "nome": "Minas Gerais",
                "status": true
            }
        },
        "examHour": null,
        "examDate": null,
        "exam": null
    },
    {
        "id": "3e82eb9e-8038-4288-9602-42d735e4b6ae",
        "nomeCompleto": "BEATRIZ RODRIGUES CAMPOS",
        "cpf": "13938648643",
        "dataNasc": "2003-05-17",
        "usoDeDados": true,
        "genero": null,
        "pcd": null,
        "cep": null,
        "rua": null,
        "bairro": null,
        "numero": null,
        "complemento": null,
        "cel": null,
        "celResponsavel": null,
        "operadora": null,
        "email": null,
        "profissao": null,
        "estadoCivil": null,
        "religiao": null,
        "rendaFamiliar": null,
        "escolaPublica": null,
        "raca": null,
        "escolaridade": null,
        "nomeFaculdade": null,
        "periodoFaculdade": null,
        "cota": null,
        "tipoPcd": null,
        "cadastroCompleto": false,
        "practiceTestId": null,
        "testId": null,
        "createdAt": "2024-01-16T03:38:50.383Z",
        "city": null,
        "examHour": null,
        "examDate": null,
        "exam": null
    },
    {
        "id": "82cc7aa8-7c1b-4b1a-b9a2-bcf7638aeafc",
        "nomeCompleto": "JESSICA COSTA SILVA",
        "cpf": "11494459639",
        "dataNasc": "1994-07-12",
        "usoDeDados": true,
        "genero": null,
        "pcd": null,
        "cep": "35636356",
        "rua": "z 1",
        "bairro": "Gran park",
        "numero": "51",
        "complemento": "não tem complemento",
        "cel": null,
        "celResponsavel": null,
        "operadora": null,
        "email": null,
        "profissao": null,
        "estadoCivil": null,
        "religiao": null,
        "rendaFamiliar": null,
        "escolaPublica": null,
        "raca": null,
        "escolaridade": null,
        "nomeFaculdade": null,
        "periodoFaculdade": null,
        "cota": null,
        "tipoPcd": null,
        "cadastroCompleto": false,
        "practiceTestId": null,
        "testId": null,
        "createdAt": "2024-01-17T17:31:18.726Z",
        "city": {
            "id": "b4c0bf14-2472-4f48-ae5e-5c16e5e592ed",
            "nome": "Bom Despacho",
            "status": true,
            "minimunAge": 15,
            "state": {
                "id": "a2d5c8bd-c162-461f-9ee0-3a60e4f2f222",
                "nome": "Minas Gerais",
                "status": true
            }
        },
        "examHour": null,
        "examDate": null,
        "exam": null
    },
    {
        "id": "bde53a3a-5d97-4dfd-9c8a-48e644aed28c",
        "nomeCompleto": "LILIA CRISTINA FELISBERTO FERREIRA",
        "cpf": "07763940611",
        "dataNasc": "1987-04-27",
        "usoDeDados": true,
        "genero": null,
        "pcd": null,
        "cep": "35634110",
        "rua": "Avenida doutor Juca ",
        "bairro": "Realengo ",
        "numero": "977",
        "complemento": "não tem complemento",
        "cel": null,
        "celResponsavel": null,
        "operadora": null,
        "email": null,
        "profissao": null,
        "estadoCivil": null,
        "religiao": null,
        "rendaFamiliar": null,
        "escolaPublica": null,
        "raca": null,
        "escolaridade": null,
        "nomeFaculdade": null,
        "periodoFaculdade": null,
        "cota": null,
        "tipoPcd": null,
        "cadastroCompleto": false,
        "practiceTestId": null,
        "testId": null,
        "createdAt": "2024-01-17T02:30:32.919Z",
        "city": {
            "id": "b4c0bf14-2472-4f48-ae5e-5c16e5e592ed",
            "nome": "Bom Despacho",
            "status": true,
            "minimunAge": 15,
            "state": {
                "id": "a2d5c8bd-c162-461f-9ee0-3a60e4f2f222",
                "nome": "Minas Gerais",
                "status": true
            }
        },
        "examHour": null,
        "examDate": null,
        "exam": null
    },
    {
        "id": "055b95c4-b7d5-4256-b913-278fa3079ae8",
        "nomeCompleto": "EMANNUEL MARTINS DA COSTA",
        "cpf": "10072205628",
        "dataNasc": "2002-04-29",
        "usoDeDados": true,
        "genero": "Masculino",
        "pcd": "NaoPossui",
        "cep": "35602971",
        "rua": "Rua Padre João Hellfes 93",
        "bairro": "Engenho do Ribeiro",
        "numero": "66",
        "complemento": "não tem complemento",
        "cel": "+5531998317109",
        "celResponsavel": null,
        "operadora": "Vivo",
        "email": "emannuelcosta@projetodesenvolve.com.br",
        "profissao": null,
        "estadoCivil": "Solteiro",
        "religiao": "Cristianismo",
        "rendaFamiliar": "InferiorAUmSalarioMinimo",
        "escolaPublica": true,
        "raca": "Branca",
        "escolaridade": null,
        "nomeFaculdade": null,
        "periodoFaculdade": null,
        "cota": "Nenhuma",
        "tipoPcd": null,
        "cadastroCompleto": false,
        "practiceTestId": null,
        "testId": null,
        "createdAt": "2024-01-16T21:47:31.181Z",
        "city": {
            "id": "b4c0bf14-2472-4f48-ae5e-5c16e5e592ed",
            "nome": "Bom Despacho",
            "status": true,
            "minimunAge": 15,
            "state": {
                "id": "a2d5c8bd-c162-461f-9ee0-3a60e4f2f222",
                "nome": "Minas Gerais",
                "status": true
            }
        },
        "examHour": {
            "id": "f5dc03df-4228-4cde-b4a2-298b85ed746d",
            "horario": "08:00:00",
            "active": true,
            "localDaProva": {
                "id": "f7a48ce6-d7bc-4b3c-8351-8bed0a2bfb8c",
                "localDaProva": "Escola Municipal Coronel Praxedes",
                "rua": "Rua Miguel Dias",
                "bairro": "Centro",
                "numero": "40",
                "complemento": null,
                "limiteDeInscritos": 20
            },
            "examDate": {
                "id": "ac223fa1-4348-4444-b389-43c5347e06b9",
                "data": "2024-01-17",
                "active": false,
                "localDaProva": {
                    "id": "f7a48ce6-d7bc-4b3c-8351-8bed0a2bfb8c",
                    "localDaProva": "Escola Municipal Coronel Praxedes",
                    "rua": "Rua Miguel Dias",
                    "bairro": "Centro",
                    "numero": "40",
                    "complemento": null,
                    "limiteDeInscritos": 20
                }
            }
        },
        "examDate": {
            "id": "ac223fa1-4348-4444-b389-43c5347e06b9",
            "data": "2024-01-17",
            "active": false,
            "localDaProva": {
                "id": "f7a48ce6-d7bc-4b3c-8351-8bed0a2bfb8c",
                "localDaProva": "Escola Municipal Coronel Praxedes",
                "rua": "Rua Miguel Dias",
                "bairro": "Centro",
                "numero": "40",
                "complemento": null,
                "limiteDeInscritos": 20
            }
        },
        "exam": {
            "id": "f7a48ce6-d7bc-4b3c-8351-8bed0a2bfb8c",
            "localDaProva": "Escola Municipal Coronel Praxedes",
            "rua": "Rua Miguel Dias",
            "bairro": "Centro",
            "numero": "40",
            "complemento": null,
            "limiteDeInscritos": 20
        }
    },
    {
        "id": "1c74e1d1-1ccc-46de-bd30-6baa55b9622a",
        "nomeCompleto": "RAIANE AUGUSTA DA SILVA",
        "cpf": "06759873696",
        "dataNasc": "1994-11-21",
        "usoDeDados": true,
        "genero": null,
        "pcd": null,
        "cep": null,
        "rua": null,
        "bairro": null,
        "numero": null,
        "complemento": null,
        "cel": null,
        "celResponsavel": null,
        "operadora": null,
        "email": null,
        "profissao": null,
        "estadoCivil": null,
        "religiao": null,
        "rendaFamiliar": null,
        "escolaPublica": null,
        "raca": null,
        "escolaridade": null,
        "nomeFaculdade": null,
        "periodoFaculdade": null,
        "cota": null,
        "tipoPcd": null,
        "cadastroCompleto": false,
        "practiceTestId": null,
        "testId": null,
        "createdAt": "2024-01-16T00:39:11.727Z",
        "city": null,
        "examHour": null,
        "examDate": null,
        "exam": null
    },
    {
        "id": "1e58866d-fd8c-4bc8-9708-9487da6e829f",
        "nomeCompleto": "LARISSA FELIPE REIS",
        "cpf": "13677860610",
        "dataNasc": "2001-09-18",
        "usoDeDados": true,
        "genero": null,
        "pcd": null,
        "cep": "35600970",
        "rua": "Avenida Vigário Nicolau 151",
        "bairro": "Centro",
        "numero": "151",
        "complemento": "não tem complemento",
        "cel": null,
        "celResponsavel": null,
        "operadora": null,
        "email": null,
        "profissao": null,
        "estadoCivil": null,
        "religiao": null,
        "rendaFamiliar": null,
        "escolaPublica": null,
        "raca": null,
        "escolaridade": null,
        "nomeFaculdade": null,
        "periodoFaculdade": null,
        "cota": null,
        "tipoPcd": null,
        "cadastroCompleto": false,
        "practiceTestId": null,
        "testId": null,
        "createdAt": "2024-01-15T14:52:28.417Z",
        "city": {
            "id": "b4c0bf14-2472-4f48-ae5e-5c16e5e592ed",
            "nome": "Bom Despacho",
            "status": true,
            "minimunAge": 15,
            "state": {
                "id": "a2d5c8bd-c162-461f-9ee0-3a60e4f2f222",
                "nome": "Minas Gerais",
                "status": true
            }
        },
        "examHour": null,
        "examDate": null,
        "exam": null
    },
    {
        "id": "7bfb8f6d-a270-4250-83bd-f42e6b0c64d7",
        "nomeCompleto": "ROGERIO APARECIDO DE MESQUITA",
        "cpf": "90041011600",
        "dataNasc": "1971-06-16",
        "usoDeDados": true,
        "genero": null,
        "pcd": null,
        "cep": null,
        "rua": null,
        "bairro": null,
        "numero": null,
        "complemento": null,
        "cel": null,
        "celResponsavel": null,
        "operadora": null,
        "email": null,
        "profissao": null,
        "estadoCivil": null,
        "religiao": null,
        "rendaFamiliar": null,
        "escolaPublica": null,
        "raca": null,
        "escolaridade": null,
        "nomeFaculdade": null,
        "periodoFaculdade": null,
        "cota": null,
        "tipoPcd": null,
        "cadastroCompleto": false,
        "practiceTestId": null,
        "testId": null,
        "createdAt": "2024-01-17T01:12:49.211Z",
        "city": null,
        "examHour": null,
        "examDate": null,
        "exam": null
    },
    {
        "id": "805ae5fa-1c69-4286-83d6-7088107154f0",
        "nomeCompleto": "VITOR MANUEL FREITAS SANTOS",
        "cpf": "16727776660",
        "dataNasc": "2002-02-27",
        "usoDeDados": true,
        "genero": "Masculino",
        "pcd": "NaoPossui",
        "cep": "35634473",
        "rua": "cogonhas",
        "bairro": "novo sao vicente",
        "numero": "277",
        "complemento": "ap 201",
        "cel": "+5537991186226",
        "celResponsavel": null,
        "operadora": "TIM",
        "email": "vitutrabalho@gmail.com",
        "profissao": null,
        "estadoCivil": "Solteiro",
        "religiao": "Cristianismo",
        "rendaFamiliar": "InferiorAUmSalarioMinimo",
        "escolaPublica": true,
        "raca": "Amarela",
        "escolaridade": null,
        "nomeFaculdade": null,
        "periodoFaculdade": null,
        "cota": "Nenhuma",
        "tipoPcd": null,
        "cadastroCompleto": false,
        "practiceTestId": null,
        "testId": null,
        "createdAt": "2024-01-16T22:16:35.405Z",
        "city": {
            "id": "b4c0bf14-2472-4f48-ae5e-5c16e5e592ed",
            "nome": "Bom Despacho",
            "status": true,
            "minimunAge": 15,
            "state": {
                "id": "a2d5c8bd-c162-461f-9ee0-3a60e4f2f222",
                "nome": "Minas Gerais",
                "status": true
            }
        },
        "examHour": null,
        "examDate": null,
        "exam": null
    },
    {
        "id": "25e64761-e4c5-43d5-ad28-d125f112f7fa",
        "nomeCompleto": "LAUDISLENE GERALDA MARQUES AZEVEDO",
        "cpf": "74960652691",
        "dataNasc": "1968-12-30",
        "usoDeDados": true,
        "genero": "Feminino",
        "pcd": "NaoPossui",
        "cep": "35634003",
        "rua": "Rua da Fábrica ",
        "bairro": "Bairro Palmeiras ",
        "numero": "147",
        "complemento": "não tem complemento",
        "cel": "+5537991353079",
        "celResponsavel": null,
        "operadora": "TIM",
        "email": "mariaclaramarquesazevedo51@gmail.com",
        "profissao": null,
        "estadoCivil": "Solteiro",
        "religiao": "Outros",
        "rendaFamiliar": "De3a10SalariosMinimos",
        "escolaPublica": true,
        "raca": "Branca",
        "escolaridade": null,
        "nomeFaculdade": null,
        "periodoFaculdade": null,
        "cota": "Nenhuma",
        "tipoPcd": null,
        "cadastroCompleto": false,
        "practiceTestId": null,
        "testId": null,
        "createdAt": "2024-01-16T22:07:55.937Z",
        "city": {
            "id": "b4c0bf14-2472-4f48-ae5e-5c16e5e592ed",
            "nome": "Bom Despacho",
            "status": true,
            "minimunAge": 15,
            "state": {
                "id": "a2d5c8bd-c162-461f-9ee0-3a60e4f2f222",
                "nome": "Minas Gerais",
                "status": true
            }
        },
        "examHour": {
            "id": "6dbcfbde-162e-422a-9796-157259dfb03c",
            "horario": "10:00:00",
            "active": true,
            "localDaProva": {
                "id": "f7a48ce6-d7bc-4b3c-8351-8bed0a2bfb8c",
                "localDaProva": "Escola Municipal Coronel Praxedes",
                "rua": "Rua Miguel Dias",
                "bairro": "Centro",
                "numero": "40",
                "complemento": null,
                "limiteDeInscritos": 20
            },
            "examDate": {
                "id": "e5d68d05-7bc1-4ea7-a92d-78c120995557",
                "data": "2024-01-19",
                "active": true,
                "localDaProva": {
                    "id": "f7a48ce6-d7bc-4b3c-8351-8bed0a2bfb8c",
                    "localDaProva": "Escola Municipal Coronel Praxedes",
                    "rua": "Rua Miguel Dias",
                    "bairro": "Centro",
                    "numero": "40",
                    "complemento": null,
                    "limiteDeInscritos": 20
                }
            }
        },
        "examDate": {
            "id": "e5d68d05-7bc1-4ea7-a92d-78c120995557",
            "data": "2024-01-19",
            "active": true,
            "localDaProva": {
                "id": "f7a48ce6-d7bc-4b3c-8351-8bed0a2bfb8c",
                "localDaProva": "Escola Municipal Coronel Praxedes",
                "rua": "Rua Miguel Dias",
                "bairro": "Centro",
                "numero": "40",
                "complemento": null,
                "limiteDeInscritos": 20
            }
        },
        "exam": {
            "id": "f7a48ce6-d7bc-4b3c-8351-8bed0a2bfb8c",
            "localDaProva": "Escola Municipal Coronel Praxedes",
            "rua": "Rua Miguel Dias",
            "bairro": "Centro",
            "numero": "40",
            "complemento": null,
            "limiteDeInscritos": 20
        }
    },
];

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

function countUsersByAgeRanges(users) {
    const ageRanges = {
        "15to18range": 0,
        "19to25range": 0,
        "26to30range": 0,
        "31to40range": 0,
        "41to50range": 0,
    };

    users.forEach(user => {
        const age = calculateAge(user.dataNasc);
        if (age >= 15 && age < 18) {
            ageRanges["15to30range"]++;
        } else if (age >= 19 && age < 25) {
            ageRanges["19to25range"]++;
        }
        else if (age >= 26 && age < 30) {
            ageRanges["26to30range"]++;
        }
        else if (age >= 31 && age < 40) {
            ageRanges["31to40range"]++;
        }
        else if (age >= 41 && age < 50) {
            ageRanges["41to50range"]++;
        }
    });

    return ageRanges;
}
// Exemplo de uso:
const users = [ /* seu array de usuários */ ];

function countUsersWithFieldValue(users, fieldName, value) {
    return users.reduce((count, user) => {
        if (user[fieldName] === value) {
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

const agesData = [
    { name: '15-18', value: countUsersWithFieldValueInRange(users, 'age', 15, 18) },
    { name: '19-25', value: countUsersWithFieldValueInRange(users, 'age', 19, 25) },
    { name: '26-30', value: countUsersWithFieldValueInRange(users, 'age', 26, 30) },
    { name: '31-40', value: countUsersWithFieldValueInRange(users, 'age', 31, 40) },
    { name: '41-50', value: countUsersWithFieldValueInRange(users, 'age', 41, 50) }
];

const DashboardMain = () => {
    /* const [data, setData] = React.useState<any>([]);
    const [loading, setLoading] = React.useState<boolean>(true);

    React.useEffect(() => {
        const fetchData = async () => {
            const response = await formsFetch('https://api-hml.pdcloud.dev/form');
            const data = await response.json();
            setData(data);
            setLoading(false);
        }
        fetchData();
    }, []);
 */
    const countPublica = countUsersWithFieldValue(mockData, 'escolaPublica', true);
    const countPrivada = countUsersWithFieldValue(mockData, 'escolaPublica', null);

    const countAgeRange = countUsersByAgeRanges(mockData);
    console.log(countAgeRange);

    return (
        <Box sx={{ 
            flexGrow: 1,
            width: '100%',
            height: '100%',
            backgroundColor: '#F5F5F5' 
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
            }
        }>
                <Typography variant='h2' fontWeight={'bold'}>Dashboard</Typography>
                <Typography variant='h5' fontWeight={'bold'} my={2}>Estudantes de Escola Pública x Estudantes de Escola Particular</Typography>
                <EducationTypePie nomeLabel1={'Estudantes de Escola Publica'} qtdLabel1={countPublica} nomeLabel2={'Estudantes de Escola Particular'} qtdLabel2={countPrivada}/>
                <Typography variant='h5' fontWeight={'bold'} my={2}>Faixa Etária</Typography>
                <AgeRangePie qtdLabel1={1} qtdLabel2={2} qtdLabel3={3} qtdLabel4={4} qtdLabel5={5}/>
            </Paper>
        </Box>
    )
}

export default DashboardMain;