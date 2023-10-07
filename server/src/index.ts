import dotenv from 'dotenv';
import Server from "./models/server";
import express from 'express'

// Configuramos dotenv
dotenv.config();

const server = new Server();

console.log('Worsls')