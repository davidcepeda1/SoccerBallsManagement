"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchController = void 0;
class SearchController {
    constructor() {
        this.universities = [
            // Ecuador
            { name: 'Escuela Politécnica Nacional', country: 'Ecuador', city: 'Quito', website: 'https://www.epn.edu.ec' },
            { name: 'Escuela Superior Politécnica del Litoral', country: 'Ecuador', city: 'Guayaquil', website: 'https://www.espol.edu.ec' },
            { name: 'Universidad de Guayaquil', country: 'Ecuador', city: 'Guayaquil', website: 'https://www.ug.edu.ec' },
            { name: 'Universidad San Francisco de Quito', country: 'Ecuador', city: 'Quito', website: 'https://www.usfq.edu.ec' },
            { name: 'Universidad de los Andes', country: 'Ecuador', city: 'Quito', website: 'https://www.uniandes.edu.ec' },
            { name: 'Universidad Politécnica Salesiana', country: 'Ecuador', city: 'Quito', website: 'https://www.ups.edu.ec' },
            { name: 'Universidad Central del Ecuador', country: 'Ecuador', city: 'Quito', website: 'https://www.uce.edu.ec' },
            { name: 'Universidad Técnica Particular de Loja', country: 'Ecuador', city: 'Loja', website: 'https://www.utpl.edu.ec' },
            // Peru
            { name: 'Universidad Nacional Mayor de San Marcos', country: 'Peru', city: 'Lima', website: 'https://www.unmsm.edu.pe' },
            { name: 'Pontificia Universidad Católica del Perú', country: 'Peru', city: 'Lima', website: 'https://www.pucp.edu.pe' },
            { name: 'Universidad de Lima', country: 'Peru', city: 'Lima', website: 'https://www.ulima.edu.pe' },
            { name: 'Universidad Nacional de Ingeniería', country: 'Peru', city: 'Lima', website: 'https://www.uni.edu.pe' },
            { name: 'Universidad de Piura', country: 'Peru', city: 'Piura', website: 'https://www.udep.edu.pe' },
            { name: 'Universidad Católica San Pablo', country: 'Peru', city: 'Arequipa', website: 'https://www.ucsp.edu.pe' },
            { name: 'Universidad Nacional Agraria La Molina', country: 'Peru', city: 'Lima', website: 'https://www.lamolina.edu.pe' },
            { name: 'Universidad Nacional de San Agustín de Arequipa', country: 'Peru', city: 'Arequipa', website: 'https://www.unsa.edu.pe' },
            // Chile
            { name: 'Universidad de Chile', country: 'Chile', city: 'Santiago', website: 'https://www.uchile.cl' },
            { name: 'Pontificia Universidad Católica de Chile', country: 'Chile', city: 'Santiago', website: 'https://www.uc.cl' },
            { name: 'Universidad de Santiago de Chile', country: 'Chile', city: 'Santiago', website: 'https://www.usach.cl' },
            { name: 'Universidad Técnica Federico Santa María', country: 'Chile', city: 'Valparaíso', website: 'https://www.usm.cl' },
            { name: 'Universidad de Concepción', country: 'Chile', city: 'Concepción', website: 'https://www.udec.cl' },
            { name: 'Universidad Austral de Chile', country: 'Chile', city: 'Valdivia', website: 'https://www.uach.cl' },
            { name: 'Universidad de Valparaíso', country: 'Chile', city: 'Valparaíso', website: 'https://www.uv.cl' },
            { name: 'Universidad de Antofagasta', country: 'Chile', city: 'Antofagasta', website: 'https://www.uantof.cl' },
            // Mexico
            { name: 'Universidad Nacional Autónoma de México', country: 'Mexico', city: 'Ciudad de México', website: 'https://www.unam.mx' },
            { name: 'Instituto Politécnico Nacional', country: 'Mexico', city: 'Ciudad de México', website: 'https://www.ipn.mx' },
            { name: 'Tecnológico de Monterrey', country: 'Mexico', city: 'Monterrey', website: 'https://www.tec.mx' },
            { name: 'Universidad Autónoma Metropolitana', country: 'Mexico', city: 'Ciudad de México', website: 'https://www.uam.mx' },
            { name: 'Universidad de Guadalajara', country: 'Mexico', city: 'Guadalajara', website: 'https://www.udg.mx' },
            { name: 'Universidad Autónoma de Nuevo León', country: 'Mexico', city: 'Monterrey', website: 'https://www.uanl.mx' },
            { name: 'Universidad de las Américas Puebla', country: 'Mexico', city: 'Puebla', website: 'https://www.udlap.mx' },
            { name: 'Universidad Iberoamericana', country: 'Mexico', city: 'Ciudad de México', website: 'https://www.ibero.mx' },
            // Costa Rica
            { name: 'Universidad de Costa Rica', country: 'Costa Rica', city: 'San José', website: 'https://www.ucr.ac.cr' },
            { name: 'Instituto Tecnológico de Costa Rica', country: 'Costa Rica', city: 'Cartago', website: 'https://www.tec.ac.cr' },
            { name: 'Universidad Nacional de Costa Rica', country: 'Costa Rica', city: 'Heredia', website: 'https://www.una.ac.cr' },
            { name: 'Universidad Latina de Costa Rica', country: 'Costa Rica', city: 'San José', website: 'https://www.ulatina.ac.cr' },
            { name: 'Universidad Estatal a Distancia', country: 'Costa Rica', city: 'San José', website: 'https://www.uned.ac.cr' },
            // Colombia
            { name: 'Universidad Nacional de Colombia', country: 'Colombia', city: 'Bogotá', website: 'https://www.unal.edu.co' },
            { name: 'Universidad de los Andes', country: 'Colombia', city: 'Bogotá', website: 'https://www.uniandes.edu.co' },
            { name: 'Pontificia Universidad Javeriana', country: 'Colombia', city: 'Bogotá', website: 'https://www.javeriana.edu.co' },
            { name: 'Universidad del Rosario', country: 'Colombia', city: 'Bogotá', website: 'https://www.urosario.edu.co' },
            { name: 'Universidad de Antioquia', country: 'Colombia', city: 'Medellín', website: 'https://www.udea.edu.co' },
            { name: 'Universidad EAFIT', country: 'Colombia', city: 'Medellín', website: 'https://www.eafit.edu.co' },
            { name: 'Universidad del Valle', country: 'Colombia', city: 'Cali', website: 'https://www.univalle.edu.co' },
            { name: 'Universidad Industrial de Santander', country: 'Colombia', city: 'Bucaramanga', website: 'https://www.uis.edu.co' },
            // Argentina
            { name: 'Universidad de Buenos Aires', country: 'Argentina', city: 'Buenos Aires', website: 'https://www.uba.ar' },
            { name: 'Universidad Nacional de La Plata', country: 'Argentina', city: 'La Plata', website: 'https://www.unlp.edu.ar' },
            { name: 'Universidad Nacional de Córdoba', country: 'Argentina', city: 'Córdoba', website: 'https://www.unc.edu.ar' },
            { name: 'Universidad Nacional del Litoral', country: 'Argentina', city: 'Santa Fe', website: 'https://www.unl.edu.ar' },
            { name: 'Universidad Nacional de Rosario', country: 'Argentina', city: 'Rosario', website: 'https://www.unr.edu.ar' },
            { name: 'Universidad Nacional de Tucumán', country: 'Argentina', city: 'San Miguel de Tucumán', website: 'https://www.unt.edu.ar' },
            { name: 'Universidad Nacional del Sur', country: 'Argentina', city: 'Bahía Blanca', website: 'https://www.uns.edu.ar' },
            { name: 'Universidad Nacional de San Martín', country: 'Argentina', city: 'San Martín', website: 'https://www.unsam.edu.ar' },
            { name: 'Universidad Nacional de Mar del Plata', country: 'Argentina', city: 'Mar del Plata', website: 'https://www.mdp.edu.ar' },
            // Bolivia
            { name: 'Universidad Mayor de San Andrés', country: 'Bolivia', city: 'La Paz', website: 'https://www.umsa.bo' },
            { name: 'Universidad Autónoma Gabriel René Moreno', country: 'Bolivia', city: 'Santa Cruz', website: 'https://www.uagrm.edu.bo' },
            { name: 'Universidad Mayor de San Simón', country: 'Bolivia', city: 'Cochabamba', website: 'https://www.umss.edu.bo' },
            { name: 'Universidad Técnica de Oruro', country: 'Bolivia', city: 'Oruro', website: 'https://www.uto.edu.bo' },
            { name: 'Universidad Autónoma Tomás Frías', country: 'Bolivia', city: 'Potosí', website: 'https://www.uatf.edu.bo' },
            { name: 'Universidad Autónoma del Beni', country: 'Bolivia', city: 'Beni', website: 'https://www.uab.edu.bo' },
            { name: 'Universidad Autónoma Juan Misael Saracho', country: 'Bolivia', city: 'Tarija', website: 'https://www.uajms.edu.bo' },
            { name: 'Universidad Autónoma de Cochaabamba', country: 'Bolivia', city: 'Cochabamba', website: 'https://www.uac.edu.bo' },
            // Paraguay
            { name: 'Universidad Nacional de Asunción', country: 'Paraguay', city: 'Asunción', website: 'https://www.una.py' },
            { name: 'Universidad Autónoma de Asunción', country: 'Paraguay', city: 'Asunción', website: 'https://www.uaa.edu.py' },
            { name: 'Universidad Nacional de Itapúa', country: 'Paraguay', city: 'Encarnación', website: 'https://www.uni.edu.py' },
            { name: 'Universidad del Pacífico', country: 'Paraguay', city: 'Asunción', website: 'https://www.up.edu.py' },
            { name: 'Universidad Católica Nuestra Señora de la Asunción', country: 'Paraguay', city: 'Asunción', website: 'https://www.uc.edu.py' },
            { name: 'Universidad Autónoma del Paraguay', country: 'Paraguay', city: 'Asunción', website: 'https://www.uap.edu.py' },
            // Uruguay
            { name: 'Universidad de la República', country: 'Uruguay', city: 'Montevideo', website: 'https://www.universidad.edu.uy' },
            { name: 'Universidad ORT Uruguay', country: 'Uruguay', city: 'Montevideo', website: 'https://www.ort.edu.uy' },
            { name: 'Universidad de Montevideo', country: 'Uruguay', city: 'Montevideo', website: 'https://www.um.edu.uy' },
            { name: 'Universidad de los Andes', country: 'Uruguay', city: 'Montevideo', website: 'https://www.uniandes.edu.uy' },
            { name: 'Universidad Católica del Uruguay', country: 'Uruguay', city: 'Montevideo', website: 'https://www.ucu.edu.uy' },
            // Brazil
            { name: 'Universidade de São Paulo', country: 'Brazil', city: 'São Paulo', website: 'https://www.usp.br' },
            { name: 'Universidade Estadual de Campinas', country: 'Brazil', city: 'Campinas', website: 'https://www.unicamp.br' },
            { name: 'Universidade Federal do Rio de Janeiro', country: 'Brazil', city: 'Rio de Janeiro', website: 'https://www.ufrj.br' }
        ];
    }
    searchUniversities(req, res) {
        const country = req.query.country;
        if (!country) {
            res.status(400).json({ error: 'Country query parameter is required' });
            return;
        }
        const filteredUniversities = this.universities.filter(university => university.country.toLowerCase() === country.toLowerCase());
        res.json(filteredUniversities);
    }
}
exports.SearchController = SearchController;
