import db from '../database'
 


export const mainMenu = (req, res) =>{
    res.render('index')
}

export const showList = async (req, res) =>{
    const users= await db.query('select * from users');
    res.render('lista', {users})
}

export const ordenar = async (req, res) =>{
    const ordenar= await db.query('select * from users order by age desc');
    console.log(ordenar);
    res.render('ordenar', {ordenar})
}

export const listRoles = async (req, res) =>{
    const roles = await db.query('select * from roles');
    res.render('listaRoles',{roles})
}

export const busquedaId = async (req, res) =>{
    const id =req.params.id;
   const user= await db.query('select * from users where id=?',[id]);
    res.json(user);
}
export const RolId = async (req, res) =>{

}
