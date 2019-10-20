export class Enumeration
{
    public id: number;
    public name: string;
    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}
// ..\longopercurso\Source\LongoPercurso\RavexSolution.LongoPercurso.Application\ViewModels\ComboViewModelAggregate\ComboViewModel.cs
export class ComboViewModel {
    id: number;
    descricao: string;
    subdescricao: string;
    imagem: string;
}
type TComboViewModel = keyof ComboViewModel;


// ..\longopercurso\Source\LongoPercurso\RavexSolution.LongoPercurso.Application\ViewModels\PivotAggregate\PivotViewModel.cs
export class PivotViewModel {
    codigoUnicoIntegracao: string;
    dataPrevistaUltimaEntrega: string;
    origemFaturamento: string;
    cidadeUltimaEntrega: string;
    foto: string;
    nomeUsuario: string;
    nomeAclimatacao: string;
    programacaoStatus: string;
}
type TPivotViewModel = keyof PivotViewModel;


// ..\longopercurso\Source\LongoPercurso\RavexSolution.LongoPercurso.Application\ViewModels\PrioridadeAlocacaoAggregate\PrioridadeAlocacaoViewModel.cs
export class PrioridadeAlocacaoViewModel {
    id: number;
    nome: string;
    pontuacao: number;
    cor: number;
    idIcone?: number;
    aclimatacaoTipoId?: number;
    aclimatacaoTipoNome: string;
    canalVendaTipoId?: number;
    canalVendaTipoNome: string;
    cargaTipoId?: number;
    cargaTipoNome: string;
    carregamentoStatusId?: number;
    carregamentoStatusNome: string;
    entregaTipoId?: number;
    entregaTipoNome: string;
    horarioCorteTipoId?: number;
    horarioCorteTipoNome: string;
    negocioTipoId?: number;
    negocioTipoNome: string;
    programacaoStatusId?: number;
    programacaoStatusNome: string;
    veiculoStatusId?: number;
    veiculoStatusNome: string;
    viagemStatusId?: number;
    viagemStatusNome: string;
}
type TPrioridadeAlocacaoViewModel = keyof PrioridadeAlocacaoViewModel;


// ..\longopercurso\Source\LongoPercurso\RavexSolution.LongoPercurso.Application\ViewModels\VeiculoAggregate\AdicionarVeiculoViewModel.cs
export class AdicionarVeiculoViewModel {
    veiculoTipoId: number;
    nome: string;
    foto: string;
    observacao: string;
    placa: string;
    temReboque: boolean;
}
type TAdicionarVeiculoViewModel = keyof AdicionarVeiculoViewModel;


// ..\longopercurso\Source\LongoPercurso\RavexSolution.LongoPercurso.Application\ViewModels\VeiculoAggregate\AlterarVeiculoViewModel.cs
export class AlterarVeiculoViewModel extends AdicionarVeiculoViewModel {
    id: number;
}
type TAlterarVeiculoViewModel = keyof AlterarVeiculoViewModel;


// ..\longopercurso\Source\LongoPercurso\RavexSolution.LongoPercurso.Application\ViewModels\VeiculoAggregate\VeiculoViewModel.cs
export class VeiculoViewModel extends AlterarVeiculoViewModel {
    tipo: VeiculoTipoViewModel;
}
type TVeiculoViewModel = keyof VeiculoViewModel;


// ..\longopercurso\Source\LongoPercurso\RavexSolution.LongoPercurso.Application\ViewModels\VeiculoTipoAggregate\AdicionarVeiculoTipoViewModel.cs
export class AdicionarVeiculoTipoViewModel {
    nome: string;
    descricao: string;
    tipo: DisposicaoTipo;
    idIcone?: number;
    capacidade: VeiculoTipoCapacidadeViewModel;
    tara?: number;
    placaObrigatoria: boolean;
}
type TAdicionarVeiculoTipoViewModel = keyof AdicionarVeiculoTipoViewModel;


// ..\longopercurso\Source\LongoPercurso\RavexSolution.LongoPercurso.Application\ViewModels\VeiculoTipoAggregate\VeiculoTipoCapacidadeViewModel.cs
export class VeiculoTipoCapacidadeViewModel {
    cubagem?: number;
    peso?: number;
    volume?: number;
}
type TVeiculoTipoCapacidadeViewModel = keyof VeiculoTipoCapacidadeViewModel;


// ..\longopercurso\Source\LongoPercurso\RavexSolution.LongoPercurso.Application\ViewModels\VeiculoTipoAggregate\VeiculoTipoViewModel.cs
export class VeiculoTipoViewModel extends AdicionarVeiculoTipoViewModel {
    id: number;
}
type TVeiculoTipoViewModel = keyof VeiculoTipoViewModel;


// ..\longopercurso\Source\LongoPercurso\RavexSolution.LongoPercurso.Domain\AggregatesModel\VeiculoTipoAggregate\DisposicaoTipo.cs
export class DisposicaoTipo extends Enumeration {
    static VeiculoSimples = new DisposicaoTipo(1, "Veículo simples");
    static CavaloMecanico = new DisposicaoTipo(2, "Cavalo mecânico");
    static Carreta = new DisposicaoTipo(3, "Carreta");
    static Carreta1 = new DisposicaoTipo(4, "Carreta 1");
    static Carreta2 = new DisposicaoTipo(5, "Carreta 2");
}
type TDisposicaoTipo = keyof DisposicaoTipo;


// ..\identity\Source\RavexSolution.Core.Infra.CrossCutting.Identity\Interfaces\IUser.cs
export class IUser {
    id: number;
    nome: string;
    apelido: string;
    foto: string;
    email: string;
    idHierarquiaOrganizacional?: number;
    idUnidadeOrganizacional?: number;
}
type TIUser = keyof IUser;

