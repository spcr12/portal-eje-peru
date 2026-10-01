// ================= DATOS DEL EXPEDIENTE (Basados en el JSON oficial) =================
const expedienteData = {
    numero: "00174-2019-0-2111-JR-LA-02",
    materia: "Desnaturalización de Contrato",
    juzgado: "Mixto de Juliaca",
    distritoJudicial: "Puno",
    especialidad: "Laboral",
    estado: "RESUELTO",
    fechaIngreso: "26/06/2019",
    demandante: "SU** QU**** AN**** L******",
    demandanteDNI: "021*****",
    demandado: "ESSALUD RED ASISTENCIAL JULIACA",
    documentos: [
        { id: "doc_001", nombre: "Demanda Inicial", autor: "SU** QU**** AN**** L******", fecha: "26/06/2019", tipo: "PDF" },
        { id: "doc_002", nombre: "Contestación de Demanda", autor: "ESSALUD RED ASISTENCIAL", fecha: "01/07/2019", tipo: "PDF" },
        { id: "anexo_001", nombre: "Constancia de Trabajo (SILSA)", autor: "SILSA", fecha: "14/06/2018", tipo: "PDF" },
        { id: "res_final", nombre: "Sentencia Definitiva (Fundada en Parte)", autor: "Juzgado Mixto de Juliaca", fecha: "15/12/2019", tipo: "PDF" }
    ]
};

// ================= DICCIONARIO MULTIDIOMA (Español, Inglés, Quechua) =================
const translations = {
    es: {
        nav_inicio: "Inicio",
        nav_expedientes: "Expedientes",
        nav_consultas: "Interoperabilidad",
        nav_notificaciones: "Notificaciones",
        nav_perfil: "Perfil",
        welcome_title: "Portal de Expediente Judicial Electrónico",
        welcome_subtitle: "Sistema de gestión procesal del Poder Judicial - Distrito Judicial de Puno",
        exp_active_label: "Expediente Activo:",
        card_details_title: "📋 Datos Básicos del Proceso",
        status_resuelto: "RESUELTO",
        lbl_nro: "N° Expediente:",
        lbl_materia: "Materia:",
        lbl_juzgado: "Juzgado:",
        lbl_especialidad: "Especialidad:",
        lbl_ingreso: "Fecha Ingreso:",
        btn_visualizar: "👁️ Visualizar Expediente",
        btn_imprimir: "🖨️ Imprimir / PDF",
        card_parties_title: "👥 Partes Procesales (Datos Protegidos)",
        party_demandante: "DEMANDANTE",
        party_demandado: "DEMANDADO",
        docs_section_title: "📁 Documentos y Anexos del Expediente",
        btn_download_zip: "📦 Descargar Carpeta ZIP",
        th_doc: "Documento",
        th_autor: "Autor / Emisor",
        th_fecha: "Fecha",
        th_acciones: "Acciones",
        exp_search_title: "🔍 Búsqueda y Gestión de Expedientes",
        btn_search: "Buscar",
        search_hint: "Ingrese un criterio para consultar expedientes en el sistema EJE.",
        interop_title: "🌐 Módulo de Consultas de Interoperabilidad (Estado Peruano)",
        btn_consultar: "Consultar API",
        interop_loading: "Consultando servicios de interoperabilidad del Estado...",
        notif_title: "📬 Casilla Electrónica y Notificaciones",
        profile_title: "👤 Perfil del Usuario del Sistema",
        modal1_title: "Aviso de Prototipo Académico",
        modal1_desc: "Este es un prototipo académico de demostración. No es un sistema oficial del Poder Judicial del Perú.",
        modal1_check: "No volver a mostrar",
        modal1_btn: "Entendido",
        modal2_title: "Protección de Datos Personales (Ley N° 29733)",
        modal2_desc: "La información contenida en este expediente está protegida por la Ley de Protección de Datos Personales. Los nombres y documentos se muestran parcialmente enmascarados.",
        modal2_link: "Ver marco legal completo",
        modal2_btn: "Acepto y Continuar"
    },
    en: {
        nav_inicio: "Home",
        nav_expedientes: "Cases",
        nav_consultas: "Interoperability",
        nav_notificaciones: "Notifications",
        nav_perfil: "Profile",
        welcome_title: "Electronic Judicial File Portal",
        welcome_subtitle: "Judiciary Case Management System - Judicial District of Puno",
        exp_active_label: "Active Case:",
        card_details_title: "📋 Basic Case Information",
        status_resuelto: "RESOLVED",
        lbl_nro: "Case No:",
        lbl_materia: "Subject:",
        lbl_juzgado: "Court:",
        lbl_especialidad: "Specialty:",
        lbl_ingreso: "Filing Date:",
        btn_visualizar: "👁️ View Case",
        btn_imprimir: "🖨️ Print / PDF",
        card_parties_title: "👥 Parties (Protected Data)",
        party_demandante: "PLAINTIFF",
        party_demandado: "DEFENDANT",
        docs_section_title: "📁 Documents and Exhibits",
        btn_download_zip: "📦 Download ZIP Folder",
        th_doc: "Document",
        th_autor: "Author / Issuer",
        th_fecha: "Date",
        th_acciones: "Actions",
        exp_search_title: "🔍 Case Search & Management",
        btn_search: "Search",
        search_hint: "Enter criteria to search cases in the EJE system.",
        interop_title: "🌐 Interoperability Query Module (Peruvian State)",
        btn_consultar: "Query API",
        interop_loading: "Querying State interoperability services...",
        notif_title: "📬 Electronic Mailbox & Notifications",
        profile_title: "👤 System User Profile",
        modal1_title: "Academic Prototype Notice",
        modal1_desc: "This is an academic demonstration prototype. It is not an official system of the Judiciary of Peru.",
        modal1_check: "Don't show again",
        modal1_btn: "Understood",
        modal2_title: "Personal Data Protection (Law No. 29733)",
        modal2_desc: "Information is protected by Personal Data Protection laws. Names are partially masked.",
        modal2_link: "View full legal framework",
        modal2_btn: "I Accept and Continue"
    },
    qu: {
        nav_inicio: "Qallariy",
        nav_expedientes: "Expedientekuna",
        nav_consultas: "Tinkuchina",
        nav_notificaciones: "Willakuykuna",
        nav_perfil: "Ruraqpa Kawsaynin",
        welcome_title: "Willay Kamachina Tantanakuy Portal",
        welcome_subtitle: "Puno suyupi Kunachina Kamachiy Llikacha",
        exp_active_label: "Kunan Expediente:",
        card_details_title: "📋 Qallariy Willakuykuna",
        status_resuelto: "TUKUSQA",
        lbl_nro: "Expediente N°:",
        lbl_materia: "Imamanta:",
        lbl_juzgado: "Juzgado:",
        lbl_especialidad: "Suyru:",
        lbl_ingreso: "Chaskisqa Punchaw:",
        btn_visualizar: "👁️ Rikuy Expediente",
        btn_imprimir: "🖨️ Tupanachiy / PDF",
        card_parties_title: "👥 Ruraqkuna (Pakasqa Willaykuna)",
        party_demandante: "MAQAPUQ",
        party_demandado: "JUCHACHAQ",
        docs_section_title: "📁 Qillqakuna",
        btn_download_zip: "📦 ZIP Huqarisqa",
        th_doc: "Qillqa",
        th_autor: "Ruraq",
        th_fecha: "Punchaw",
        th_acciones: "Ruraykuna",
        exp_search_title: "🔍 Maskana Expedientekuna",
        btn_search: "Maskay",
        search_hint: "Qillqay maskanaykipaq.",
        interop_title: "🌐 Estado Tinkuchina Tanta",
        btn_consultar: "Tapuy",
        interop_loading: "Tinkuchina llamkashan...",
        notif_title: "📬 Willakuykuna",
        profile_title: "👤 Ruraqpa Perfilnin",
        modal1_title: "Yachaywasi Prototipo Willakuy",
        modal1_desc: "Kayqa yachaywasi ruraymi. Manam kamachiy llikachu.",
        modal1_check: "Amañachu rikuchiy",
        modal1_btn: "Entiendi",
        modal2_title: "Willakuy Waqaychay Kamachiy",
        modal2_desc: "Willakuykunaqa pakasqam kachkan.",
        modal2_link: "Kamachiyta qhaway",
        modal2_btn: "Chaskini"
    }
};

// ================= INICIALIZACIÓN Y EVENTOS =================
document.addEventListener("DOMContentLoaded", () => {
    // 1. Reloj en tiempo real
    setInterval(updateClock, 1000);
    updateClock();

    // 2. Ocultar Splash Screen después de 3.5 segundos
    setTimeout(() => {
        const splash = document.getElementById("splash-screen");
        if (splash) {
            splash.style.opacity = "0";
            setTimeout(() => splash.style.display = "none", 600);
        }
    }, 3500);

    // 3. Mostrar Modal Académico al iniciar
    document.getElementById("modal-academico").style.display = "flex";

    // 4. Renderizar tabla de documentos
    renderDocumentosTable();
});

// Reloj dinámico
function updateClock() {
    const now = new Date();
    const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    document.getElementById("live-clock").innerText = now.toLocaleDateString('es-PE', options);
}

// Cerrar Modal Académico y abrir Modal de Privacidad de Datos
function cerrarModalAcademico() {
    document.getElementById("modal-academico").style.display = "none";
    document.getElementById("modal-datos").style.display = "flex";
}

// Aceptar Datos Protegidos
function aceptarDatosProtegidos() {
    document.getElementById("modal-datos").style.display = "none";
}

// Navegación por pestañas (Tabs)
function switchTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.style.display = 'none');
    document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));

    document.getElementById(`tab-${tabId}`).style.display = 'block';
    event.currentTarget.classList.add('active');
}

// Sistema de Traducción Multidioma en Tiempo Real
function changeLanguage(lang) {
    const texts = translations[lang];
    if (!texts) return;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (texts[key]) {
            el.innerText = texts[key];
        }
    });
}

// Renderizar tabla de documentos
function renderDocumentosTable() {
    const tbody = document.getElementById("documentos-table-body");
    tbody.innerHTML = "";
    expedienteData.documentos.forEach(doc => {
        tbody.innerHTML += `
            <tr>
                <td><strong>📄 ${doc.nombre}</strong></td>
                <td>${doc.autor}</td>
                <td>${doc.fecha}</td>
                <td>
                    <button class="btn-primary-sm" onclick="abrirVisorExpediente()">Ver</button>
                    <button class="btn-secondary" style="padding: 4px 8px; font-size: 0.75rem;" onclick="alert('Descargando ${doc.nombre}...')">PDF</button>
                </td>
            </tr>
        `;
    });
}

// Visor de Expediente Avanzado
function abrirVisorExpediente() {
    const modal = document.getElementById("modal-visor");
    const bodyContent = document.getElementById("visor-content-body");
    
    bodyContent.innerHTML = `
        <div style="background: white; padding: 40px; border-radius: 6px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); max-width: 800px; margin: 0 auto;">
            <h2 style="color: #003366; border-bottom: 2px solid #003366; padding-bottom: 10px; margin-bottom: 20px;">PODER JUDICIAL DEL PERÚ - EJE</h2>
            <p><strong>Expediente N°:</strong> ${expedienteData.numero}</p>
            <p><strong>Materia:</strong> ${expedienteData.materia}</p>
            <p><strong>Juzgado:</strong> ${expedienteData.juzgado} (${expedienteData.distritoJudicial})</p>
            <hr style="margin: 20px 0; border: 0; border-top: 1px solid #ddd;">
            <h3 style="margin-bottom: 15px; color: #333;">Vista Previa de Documento Procesal</h3>
            <p>Estimado usuario, este documento cuenta con firma digital certificada por el Poder Judicial del Perú conforme a la Ley N° 27269 (Ley de Firmas y Certificados Digitales).</p>
            <div style="background: #f8f9fa; padding: 20px; border-left: 4px solid #c5a059; margin-top: 20px;">
                <p><strong>Demandante:</strong> <span class="masked-privacy">${expedienteData.demandante}</span> (DNI: ${expedienteData.demandanteDNI})</p>
                <p><strong>Demandado:</strong> ${expedienteData.demandado}</p>
                <p><strong>Estado Procesal:</strong> Proceso Concluido / Sentencia Ejecutoriada</p>
            </div>
        </div>
    `;
    modal.style.display = "flex";
}

function cerrarVisorExpediente() {
    document.getElementById("modal-visor").style.display = "none";
}

function imprimirExpediente() {
    window.print();
}

function descargarPDFActual() {
    alert("Generando PDF certificado del expediente para descarga...");
}

function copiarEnlaceExpediente() {
    navigator.clipboard.writeText(window.location.href);
    alert("¡Enlace del expediente copiado al portapapeles!");
}

function simularDescargaZip() {
    alert("📦 Preparando paquete ZIP con todos los anexos y resoluciones del expediente. La descarga iniciará en breve.");
}

// Buscador de expedientes
function buscarExpediente() {
    const val = document.getElementById("input-buscar-exp").value.trim();
    const resDiv = document.getElementById("resultado-busqueda");
    if (!val) {
        alert("Por favor ingrese un número de expediente o DNI.");
        return;
    }
    resDiv.innerHTML = `
        <div style="background: #eef2f7; padding: 15px; border-radius: 6px;">
            <p><strong>Resultado para:</strong> ${val}</p>
            <p><strong>Expediente Encontrado:</strong> 00174-2019-0-2111-JR-LA-02 (${expedienteData.materia})</p>
            <p><strong>Estado:</strong> <span class="status-badge resuelto">RESUELTO</span></p>
            <button class="btn-primary-sm" style="margin-top: 10px;" onclick="abrirVisorExpediente()">Ver Detalle</button>
        </div>
    `;
}

// Módulo de Interoperabilidad (Tabs)
let currentInteropService = 'reniec';

function switchInteropTab(service, event) {
    currentInteropService = service;
    document.querySelectorAll('.interop-tab-btn').forEach(btn => btn.classList.remove('active'));
    event.currentTarget.classList.add('active');
    document.getElementById('interop-result').style.display = 'none';
}

function ejecutarConsultaInterop() {
    const queryVal = document.getElementById('interop-input').value.trim();
    if (!queryVal) {
        alert("Ingrese un número de documento válido para consultar.");
        return;
    }

    const loader = document.getElementById('interop-loader');
    const resultCard = document.getElementById('interop-result');

    loader.style.display = 'block';
    resultCard.style.display = 'none';

    // Simular delay de API de Interoperabilidad (1.5 segundos)
    setTimeout(() => {
        loader.style.display = 'none';
        resultCard.style.display = 'block';

        let htmlContent = '';
        if (currentInteropService === 'reniec') {
            htmlContent = `
                <h4>📌 RENIEC - Servicio de Identificación</h4>
                <p><strong>Nombres:</strong> <span class="masked-privacy">ANDRÉS LEONIDAS</span></p>
                <p><strong>Apellidos:</strong> <span class="masked-privacy">SUPO QUISPE</span></p>
                <p><strong>Fecha de Nacimiento:</strong> 12/04/1975</p>
                <p><strong>Estado Civil:</strong> Casado</p>
                <p><strong>Ubigeo:</strong> 211101 (Puno - San Román - Juliaca)</p>
            `;
        } else if (currentInteropService === 'inpe') {
            htmlContent = `
                <h4>🏛️ INPE - Instituto Nacional Penitenciario</h4>
                <p><strong>Consulta para DNI:</strong> ${queryVal}</p>
                <p><strong>Antecedentes Penitenciarios:</strong> <span style="color: green; font-weight: bold;">NO registra ingresos ni requisitorias vigentes en establecimientos penitenciarios.</span></p>
            `;
        } else if (currentInteropService === 'pnp') {
            htmlContent = `
                <h4>🚨 PNP - Policía Nacional del Perú</h4>
                <p><strong>Consulta para Documento:</strong> ${queryVal}</p>
                <p><strong>Certificado de Antecedentes Policiales:</strong> <span style="color: green; font-weight: bold;">SIN REGISTRO DE ANTECEDENTES POLICIALES</span></p>
            `;
        } else if (currentInteropService === 'migraciones') {
            htmlContent = `
                <h4>✈️ MIGRACIONES - Superintendencia Nacional</h4>
                <p><strong>Registro Migratorio:</strong> Ciudadano peruano con movimientos migratorios regulares registrados en territorio nacional.</p>
            `;
        }

        resultCard.innerHTML = htmlContent;
    }, 1500);
}