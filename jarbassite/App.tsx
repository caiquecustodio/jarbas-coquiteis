
/**
 * Jarbas Coquetéis Portfolio
 * Developed by Caique Custodio - C&C Craft
 * Focus: High-end conversion and visual excellence.
 */

import React, { useState, useEffect } from 'react';
import { 
  Instagram, 
  MessageCircle, 
  Menu, 
  X, 
  GlassWater, 
  Wine, 
  CheckCircle2, 
  ArrowRight,
  Layout,
  Star,
  Zap,
  MapPin,
  Calendar,
  Users,
  PartyPopper,
  User,
  Send
} from 'lucide-react';
import { IMAGES, CONTACT } from './constants';

const TypewriterText: React.FC<{ text: string }> = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');
  
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, [text]);

  return <span>{displayedText}</span>;
};

const BudgetModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    nome: '',
    local: '',
    pessoas: '',
    evento: '',
    data: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Olá Jarbas! Gostaria de um orçamento:%0A%0A*Nome:* ${formData.nome}%0A*Local:* ${formData.local}%0A*Qtd. Pessoas:* ${formData.pessoas}%0A*Tipo de Evento:* ${formData.evento}%0A*Data:* ${formData.data}`;
    window.open(`https://wa.me/5585986054657?text=${message}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-[#111] border border-gold/30 w-full max-w-lg rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(212,175,55,0.2)] animate-in fade-in zoom-in duration-300">
        <div className="bg-gold p-6 flex justify-between items-center">
          <h3 className="text-black font-serif text-2xl font-bold">Solicitar Orçamento</h3>
          <button onClick={onClose} className="text-black hover:scale-110 transition-transform"><X /></button>
        </div>
        <form onSubmit={handleSubmit} className="p-8 space-y-5">
          <div className="space-y-2">
            <label className="text-gold text-xs font-bold tracking-widest flex items-center gap-2"><User size={14}/> NOME COMPLETO</label>
            <input 
              required
              className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-gold outline-none transition-all"
              placeholder="Como podemos te chamar?"
              value={formData.nome}
              onChange={e => setFormData({...formData, nome: e.target.value})}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-2">
              <label className="text-gold text-xs font-bold tracking-widest flex items-center gap-2"><MapPin size={14}/> LOCAL DO EVENTO</label>
              <input 
                required
                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-gold outline-none transition-all"
                placeholder="Ex: Fortaleza - CE"
                value={formData.local}
                onChange={e => setFormData({...formData, local: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <label className="text-gold text-xs font-bold tracking-widest flex items-center gap-2"><Users size={14}/> QTD. PESSOAS</label>
              <input 
                required
                type="number"
                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-gold outline-none transition-all"
                placeholder="Ex: 100"
                value={formData.pessoas}
                onChange={e => setFormData({...formData, pessoas: e.target.value})}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-2">
              <label className="text-gold text-xs font-bold tracking-widest flex items-center gap-2"><PartyPopper size={14}/> TIPO DE EVENTO</label>
              <select 
                required
                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-gold outline-none transition-all appearance-none"
                value={formData.evento}
                onChange={e => setFormData({...formData, evento: e.target.value})}
              >
                <option value="" disabled className="bg-black">Selecione...</option>
                <option value="Casamento" className="bg-black">Casamento</option>
                <option value="Aniversário" className="bg-black">Aniversário</option>
                <option value="15 Anos" className="bg-black">15 Anos</option>
                <option value="Corporativo" className="bg-black">Corporativo</option>
                <option value="Outro" className="bg-black">Outro</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-gold text-xs font-bold tracking-widest flex items-center gap-2"><Calendar size={14}/> DATA PREVISTA</label>
              <input 
                required
                type="date"
                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-gold outline-none transition-all"
                value={formData.data}
                onChange={e => setFormData({...formData, data: e.target.value})}
              />
            </div>
          </div>
          <button 
            type="submit"
            className="w-full bg-gold text-black font-bold py-4 rounded-xl flex items-center justify-center gap-3 hover:bg-amber-400 hover:scale-[1.02] transition-all mt-4"
          >
            ENVIAR PARA O WHATSAPP <Send size={18} />
          </button>
        </form>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openBudget = (e?: React.MouseEvent) => {
    e?.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#050505] overflow-x-hidden" data-developer="Caique Custodio - C&C Craft">
      <BudgetModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-4 shadow-xl' : 'bg-transparent py-8'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src={IMAGES.LOGO} alt="Jarbas Coquetéis Logo" className="h-12 w-12 rounded-full border border-gold object-cover" />
            <span className="font-serif text-xl tracking-widest text-white hidden sm:block uppercase">JARBAS COQUETÉIS</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-widest text-gray-300">
            <a href="#sobre" className="hover:text-gold transition-colors">SOBRE</a>
            <a href="#servicos" className="hover:text-gold transition-colors">SERVIÇOS</a>
            <a href="#diferenciais" className="hover:text-gold transition-colors">DIFERENCIAIS</a>
            <a href="#galeria" className="hover:text-gold transition-colors">GALERIA</a>
            <button 
              onClick={openBudget}
              className="px-6 py-2 bg-gold text-black rounded-full hover:bg-amber-400 transition-all font-bold"
            >
              ORÇAMENTO
            </button>
          </div>

          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-lg border-t border-white/10 p-8 flex flex-col gap-6 md:hidden">
            <a href="#sobre" onClick={() => setIsMenuOpen(false)} className="text-xl font-serif text-white hover:text-gold">SOBRE</a>
            <a href="#servicos" onClick={() => setIsMenuOpen(false)} className="text-xl font-serif text-white hover:text-gold">SERVIÇOS</a>
            <a href="#diferenciais" onClick={() => setIsMenuOpen(false)} className="text-xl font-serif text-white hover:text-gold">DIFERENCIAIS</a>
            <a href="#galeria" onClick={() => setIsMenuOpen(false)} className="text-xl font-serif text-white hover:text-gold">GALERIA</a>
            <button onClick={openBudget} className="text-xl font-serif text-gold text-left">SOLICITAR ORÇAMENTO</button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] scale-105 hover:scale-100" 
          style={{ backgroundImage: `url('${IMAGES.HERO}')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 fade-in">
          <div className="max-w-4xl text-left">
            <h1 className="text-5xl md:text-8xl font-serif text-white mb-6 leading-tight font-bold italic tracking-tight min-h-[1.2em]">
              <TypewriterText text="Drinks que transformam eventos em experiências inesquecíveis" />
            </h1>
            <p className="text-lg md:text-2xl text-gray-300 mb-10 font-light tracking-wide flex items-center gap-2">
              <MapPin className="text-gold" size={24} />
              Serviço profissional de coquetelaria em {CONTACT.LOCATION}
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <button 
                onClick={openBudget}
                className="w-full sm:w-auto px-10 py-5 bg-gold text-black font-bold rounded-full flex items-center justify-center gap-3 hover:bg-amber-400 hover-gold transition-all text-lg"
              >
                <MessageCircle size={22} /> SOLICITAR ORÇAMENTO
              </button>
              <a 
                href={CONTACT.INSTAGRAM_LINK}
                target="_blank"
                className="w-full sm:w-auto px-10 py-5 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold rounded-full flex items-center justify-center gap-3 hover:bg-white/20 transition-all text-lg"
              >
                <Instagram size={22} /> VER PORTFÓLIO
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <span className="text-gold font-bold tracking-[0.3em] text-xs uppercase mb-4 block">EXCELÊNCIA EM CADA DOSE</span>
              <h2 className="text-3xl md:text-5xl font-serif text-white mb-8">Sofisticação e Sabor que elevam o seu evento</h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                A Jarbas Coquetéis oferece uma experiência completa em drinks para eventos sociais e corporativos. 
                Trabalhamos com estrutura profissional, ingredientes de primeira linha e preparo ao vivo, 
                elevando o nível do seu evento com um toque de luxo e profissionalismo.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-gold" size={20} />
                  <span className="text-gray-300">Bar Estruturado</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-gold" size={20} />
                  <span className="text-gray-300">Equipe Treinada</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-gold" size={20} />
                  <span className="text-gray-300">Frutas Frescas</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-gold" size={20} />
                  <span className="text-gray-300">Copos de Cristal</span>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 relative group">
              <div className="absolute -inset-4 border border-gold/30 rounded-2xl group-hover:inset-0 transition-all duration-500"></div>
              <img 
                src={IMAGES.BAR_COUNTER} 
                alt="Balcão Jarbas Coquetéis" 
                className="rounded-xl relative z-10 w-full object-cover aspect-[4/3] shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-gold p-6 rounded-xl z-20 hidden lg:block">
                <p className="text-black font-serif italic text-2xl">+5 anos</p>
                <p className="text-black/80 text-sm font-bold">DE EXPERIÊNCIA</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-24 bg-black relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
          <img src={IMAGES.DAY_BAR} alt="Background" className="w-full h-full object-cover scale-150 blur-sm" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-gold font-bold tracking-[0.3em] text-xs uppercase mb-4">NOSSOS SERVIÇOS</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-white">Cardápio Completo e Personalizado</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<Wine className="text-gold" size={32} />}
              title="Bar Completo"
              description="Estrutura de bar luxuosa montada no seu evento com equipe completa."
            />
            <ServiceCard 
              icon={<GlassWater className="text-gold" size={32} />}
              title="Drinks Autorais"
              description="Criações exclusivas com misturas de sabores inusitados e marcantes."
            />
            <ServiceCard 
              icon={<Star className="text-gold" size={32} />}
              title="Eventos Sociais"
              description="Casamentos, 15 anos e formaturas com o glamour que a data exige."
            />
            <ServiceCard 
              icon={<CheckCircle2 className="text-gold" size={32} />}
              title="Corporativos"
              description="Confraternizações e lançamentos com agilidade e profissionalismo."
            />
            <ServiceCard 
              icon={<Zap className="text-gold" size={32} />}
              title="Caipifrutas Premium"
              description="As melhores combinações de frutas frescas com destilados de alto padrão."
            />
            <ServiceCard 
              icon={<Layout className="text-gold" size={32} />}
              title="Consultoria"
              description="Ajudamos você a escolher o cardápio ideal para o perfil do seu convidado."
            />
          </div>
        </div>
      </section>

      {/* Live Experience Section */}
      <section className="relative py-32 flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMAGES.BARTENDER} alt="Bartender working" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl">
            <h2 className="text-gold font-bold tracking-[0.3em] text-xs uppercase mb-4">EXPERIÊNCIA AO VIVO</h2>
            <h3 className="text-4xl md:text-6xl font-serif text-white mb-8">A arte de servir que encanta convidados</h3>
            <p className="text-gray-300 text-xl leading-relaxed mb-10 italic">
              "Mais do que drinks, entregamos uma experiência ao vivo que encanta e envolve seus convidados, transformando o bar no coração do evento."
            </p>
            <button 
              onClick={openBudget}
              className="inline-flex items-center gap-4 text-gold font-bold text-lg hover:translate-x-2 transition-transform"
            >
              SOLICITAR ORÇAMENTO AGORA <ArrowRight />
            </button>
          </div>
        </div>
      </section>

      {/* Differentials */}
      <section id="diferenciais" className="py-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px] overflow-hidden rounded-2xl">
              <img src={IMAGES.GLASSES} alt="Taças elegantes" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
            <div>
              <h2 className="text-gold font-bold tracking-[0.3em] text-xs uppercase mb-4">DIFERENCIAIS</h2>
              <h3 className="text-4xl font-serif text-white mb-8">O segredo está nos detalhes</h3>
              <ul className="space-y-6">
                <DifferentialItem text="Atendimento profissional e carismático" />
                <DifferentialItem text="Drinks preparados na hora com técnica apurada" />
                <DifferentialItem text="Estrutura completa de bar personalizada" />
                <DifferentialItem text="Visual sofisticado para harmonizar com o décor" />
                <DifferentialItem text="Ingredientes frescos e selecionados a dedo" />
                <DifferentialItem text="Insumos de marcas premium consagradas" />
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeria" className="py-24 bg-[#050505]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-gold font-bold tracking-[0.3em] text-xs uppercase mb-4">GALERIA DE EVENTOS</h2>
              <h3 className="text-4xl md:text-5xl font-serif text-white italic">Eventos que Marcaram Época</h3>
            </div>
            <a href={CONTACT.INSTAGRAM_LINK} target="_blank" className="flex items-center gap-2 text-gold font-bold">
              VER MAIS NO INSTAGRAM <ArrowRight size={18} />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 group relative overflow-hidden rounded-2xl h-[400px]">
              <img src={IMAGES.EVENT_ANTARES} alt="Evento Antares" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                <p className="text-white font-serif text-2xl italic">Evento Exclusivo - Antares</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl h-[400px]">
              <img src={IMAGES.EVENT_BIRTHDAY} alt="Evento Aniversário" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                <p className="text-white font-serif text-2xl italic">Festa de Aniversário</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl h-[400px]">
              <img src={IMAGES.EVENT_ACTION} alt="Action Event" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                <p className="text-white font-serif text-2xl italic">Celebrando Conquistas</p>
              </div>
            </div>
            <div className="md:col-span-2 group relative overflow-hidden rounded-2xl h-[400px]">
              <img src={IMAGES.BAR_COUNTER} alt="Full Bar" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                <p className="text-white font-serif text-2xl italic">Estrutura Jarbas Coquetéis</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gold relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={IMAGES.BAR_COUNTER} alt="Pattern" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-black font-serif text-4xl md:text-6xl mb-8 leading-tight">
            Leve sofisticação e sabor <br /> <span className="italic">para o seu próximo evento</span>
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button 
              onClick={openBudget}
              className="w-full sm:w-auto px-10 py-5 bg-black text-white font-bold rounded-full hover:bg-gray-900 transition-all flex items-center justify-center gap-3 shadow-2xl"
            >
              <MessageCircle /> SOLICITAR ORÇAMENTO
            </button>
            <a 
              href={CONTACT.INSTAGRAM_LINK}
              target="_blank"
              className="w-full sm:w-auto px-10 py-5 bg-transparent border-2 border-black text-black font-bold rounded-full hover:bg-black hover:text-white transition-all flex items-center justify-center gap-3"
            >
              <Instagram /> NOSSO INSTAGRAM
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-[#020202] border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 items-start text-center md:text-left">
            <div>
              <img src={IMAGES.LOGO} alt="Jarbas Logo" className="h-16 w-16 mx-auto md:mx-0 rounded-full border border-gold mb-6" />
              <p className="text-gray-400 max-w-xs mx-auto md:mx-0">
                Drinks que transformam momentos em experiências reais. Coquetelaria premium para eventos inesquecíveis.
              </p>
            </div>
            <div>
              <h4 className="text-gold font-bold mb-6 tracking-widest text-sm">LOCALIZAÇÃO</h4>
              <p className="text-gray-300 mb-2">{CONTACT.LOCATION}</p>
              <p className="text-gray-500 text-sm">Atendemos toda a região metropolitana.</p>
            </div>
            <div>
              <h4 className="text-gold font-bold mb-6 tracking-widest text-sm">SIGA-NOS</h4>
              <div className="flex justify-center md:justify-start gap-6">
                <a href={CONTACT.INSTAGRAM_LINK} target="_blank" className="text-gray-300 hover:text-gold transition-colors">
                  <Instagram />
                </a>
                <a onClick={openBudget} className="text-gray-300 hover:text-gold transition-colors cursor-pointer">
                  <MessageCircle />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">© {new Date().getFullYear()} Jarbas Coquetéis. Todos os direitos reservados.</p>
            <p className="text-gray-600 text-xs opacity-50 select-none cursor-default" title="Feito por Caique Custodio - C&C Craft">
              Premium Experience Craftsmanship
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <button 
        onClick={openBudget}
        className="fixed bottom-8 right-8 z-[100] bg-green-500 text-white p-4 rounded-full shadow-[0_10px_30px_rgba(34,197,94,0.4)] hover:scale-110 active:scale-95 transition-all animate-pulse"
      >
        <MessageCircle size={32} />
      </button>
    </div>
  );
};

// Sub-components
const ServiceCard: React.FC<{ icon: React.ReactNode, title: string, description: string }> = ({ icon, title, description }) => (
  <div className="bg-[#111] border border-white/5 p-8 rounded-2xl hover-gold transition-all group">
    <div className="mb-6 group-hover:scale-110 transition-transform duration-300">{icon}</div>
    <h4 className="text-white text-xl font-serif mb-3 italic">{title}</h4>
    <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
  </div>
);

const DifferentialItem: React.FC<{ text: string }> = ({ text }) => (
  <li className="flex items-center gap-4 group">
    <div className="w-2 h-2 rounded-full bg-gold group-hover:scale-150 transition-all"></div>
    <span className="text-gray-300 text-lg group-hover:text-white transition-colors">{text}</span>
  </li>
);

/**
 * Crafted with passion by Caique Custodio - C&C Craft
 */
export default App;
