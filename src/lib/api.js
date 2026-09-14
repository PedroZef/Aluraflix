const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

async function handleResponse(res, errorMessage) {
    if (!res.ok) {
        throw new Error(errorMessage);
    }
    // DELETE do json-server pode retornar objeto ou vazio
    const text = await res.text();
    return text ? JSON.parse(text) : null;
}

export { API_URL };

export async function listVideos() {
    const res = await fetch(`${API_URL}/videos`);
    return handleResponse(res, "Não foi possível carregar os vídeos");
}

export async function getVideo(id) {
    const res = await fetch(`${API_URL}/videos/${id}`);
    return handleResponse(res, "Vídeo não encontrado");
}

export async function createVideo({ area, imagem, titulo, descricao, link }) {
    const res = await fetch(`${API_URL}/videos`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ area, imagem, titulo, descricao, link }),
    });
    return handleResponse(res, "Não foi possível adicionar novo vídeo");
}

export async function updateVideo(id, { area, imagem, titulo, descricao, link }) {
    const res = await fetch(`${API_URL}/videos/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ area, imagem, titulo, descricao, link }),
    });
    return handleResponse(res, "Não foi possível atualizar o card vídeo");
}

export async function deleteVideo(id) {
    const res = await fetch(`${API_URL}/videos/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
    });
    if (!res.ok) {
        throw new Error("Erro ao excluir vídeo");
    }
    return true;
}
