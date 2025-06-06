import http from "@/services/http"
import type { ClubDTO, ClubUpdateDTO, ClubSocialLinksDTO } from "@/services/dao/models/Club.ts"

class ClubDao {
    async fetchAll(): Promise<ClubDTO[]> {
        const { data } = await http.get<ClubDTO[]>("/clubs")
        return data
    }

    async details(clubId: number): Promise<ClubDTO> {
        const { data } = await http.get<ClubDTO>(`/clubs/${clubId}`)
        return data
    }

    async update(clubId: number, payload: ClubUpdateDTO): Promise<void> {
        await http.put(`/clubs/${clubId}`, payload)
    }

    async fetchHistory(clubId: number): Promise<any[]> {
        const { data } = await http.get<any[]>(`/clubs/${clubId}/history`)
        return data
    }

    async fetchAccessLog(clubId: number): Promise<any[]> {
        const { data } = await http.get<any[]>(`/clubs/${clubId}/access-log`)
        return data
    }

    async updateDetails(clubId: number, payload: ClubUpdateDTO): Promise<void> {
        await http.put(`/clubs/${clubId}/details`, payload)
    }

    async updateSocialLinks(clubId: number, payload: ClubSocialLinksDTO): Promise<void> {
        await http.put(`/clubs/${clubId}/social-links`, payload)
    }
}

export default new ClubDao()
