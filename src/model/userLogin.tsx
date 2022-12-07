interface UserLogin {
    id_usuario: number;
    nome:string;
    usuario: string;
    foto:string;
    senha: string;
    token?: string| null
}

export default UserLogin;