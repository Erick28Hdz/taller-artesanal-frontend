import UsuariosTable from "./tablausuarios-universal";
import { Usuario } from "../../admin/types/usuario";

interface VendedoresTableProps {
  usuarios: Usuario[];
  loading: boolean;
  error: string | null;
}

const VendedoresTable: React.FC<VendedoresTableProps> = ({ usuarios, loading, error }) => {
  const vendedores = usuarios.filter((u) => u.id_rol === 5);

  return <UsuariosTable usuarios={vendedores} loading={loading} error={error} />;
};

export default VendedoresTable;