import { useState } from "react";
import { Button, ButtonToolbar, IconButton, Input, InputGroup } from "rsuite"
import EyeCloseIcon from '@rsuite/icons/EyeClose';
import VisibleIcon from '@rsuite/icons/Visible';
import { FcGoogle } from "react-icons/fc";
import { SiGithub } from "react-icons/si";
import { Link } from "react-router-dom";



export const Login=()=>{

    const [visible, setVisible] = useState(false);

  const handleChange = () => {
    setVisible(!visible);
  };


    return  <div className="flex justify-center items-center">
      
      <div className="w-[50%]">
          <form className="border !my-[90px] border-gray-300 !p-5 rounded shadow-2xl ">
              <h3 className="!text-2x1 my-5">Entrar</h3>
              <p>Preencha os campos para entrar na sua conta</p>
              <div>
                <div className="!my-5">
                  <label htmlFor="">Email</label>
                 <InputGroup >
                  <Input  placeholder="digite seu email" />
                  <InputGroup.Addon>@</InputGroup.Addon>
                </InputGroup>
                </div>
                <div className="!my-5">
                  <label htmlFor="">Senha</label>
                 <InputGroup inside >
                  <Input type={visible ? 'text' : 'password'} placeholder="digite sua senha" />
                  <InputGroup.Button onClick={handleChange}>
                    {visible ? <VisibleIcon /> : <EyeCloseIcon />}
                  </InputGroup.Button>
                </InputGroup>
                <div className="!my-5 flex justify-center">
                  <Button appearance="primary" size="lg">Entrar</Button>
                </div>
                <div className="flex" >
                  <Link  className="!text-[11px] !text-gray-400" to={"/register"}>Não tem uma conta?Clique aqui</Link>
                </div>

                <div className="!my-12">
                  <a className="flex !my-3 hover:!bg-blue-400 hover:!text-white transition-all !text-black cursor-pointer items-center !py-3.5 rounded shadow justify-center">
                    <p>Entrar com Google</p>
                    <FcGoogle className="text-2xl !mx-3" />
                  </a>

                  <a className="flex hover:!bg-blue-400 hover:!text-white transition-all !text-black cursor-pointer items-center !py-3.5 rounded shadow justify-center">
                    <p>Entrar com google</p>
                    <SiGithub className="text-2xl !mx-3" />
                  </a>
                </div>
                </div>
              </div>
      </form>
      </div>
    
    </div>
}