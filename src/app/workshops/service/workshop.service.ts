import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PaginationResult} from './PaginationResult';
import {Workshop, WorkshopCreateModel} from './Workshop';
import {environment} from '../../../environments/environment';
import {Interest} from './Interest';

@Injectable({
	providedIn: 'root'
})
export class WorkshopService {

	constructor(private http: HttpClient) {
	}

	public getWorkshops(page: number, size: number) {
		return this.http.get<PaginationResult<Workshop>>(`${environment.workshopsUrl}/workshop?page=${page}&size=${size}`);
	}

	public getInterests(page: number, size: number) {
		return this.http.get<PaginationResult<Interest>>(`${environment.workshopsUrl}/interest?page=${page}&size=${size}`);
	}

	public getWorkshop(id: string) {
		return this.http.get<Workshop>(`${environment.workshopsUrl}/workshop/${id}`);
	}

	public createInterest(topic: string) {
		return this.http.post<Interest>(`${environment.workshopsUrl}/interest`, {topic}, {withCredentials: true});
	}

	public addMemberInterest(interestId: string) {
		return this.http.post<Interest>(`${environment.workshopsUrl}/interest/${interestId}/member`, {}, {withCredentials: true});
	}

	public addVisiorInterest(interestId: string, displayName: string, email: string) {
		return this.http.post<Interest>(`${environment.workshopsUrl}/interest/${interestId}/visitor`, {displayName, email});
	}

	public participateAsMember(workshopId: string, dates: string[]) {
		return this.http.post<Workshop>(`${environment.workshopsUrl}/workshop/${workshopId}/memberParticipations`, dates, {withCredentials: true});
	}

	public participateAsVisitor(workshopId: string, dates: string[], displayName: string, email: string) {
		return this.http.post<Workshop>(`${environment.workshopsUrl}/workshop/${workshopId}/visitorParticipations`, {
			displayName,
			email,
			dates
		});
	}

	public validate(token: string) {
		return this.http.post<{ successful: boolean }>(`${environment.workshopsUrl}/validation`, {token});
	}

	public createWorkshop(workshop: WorkshopCreateModel) {
		return this.http.post<Workshop>(`${environment.workshopsUrl}/workshop`, workshop, {withCredentials: true});
	}

	public setDate(workshopId: string, date: string) {
		return this.http.post<Workshop>(`${environment.workshopsUrl}/workshop/${workshopId}/finalDate`, {finalDate: date}, {withCredentials: true});
	}

	public cancelWorkshop(workshopId: string) {
		return this.http.delete<Workshop>(`${environment.workshopsUrl}/workshop/${workshopId}/finalDate`, {withCredentials: true});
	}

	public editWorkshop(workshopId: string, model: WorkshopCreateModel) {
		return this.http.put(`${environment.workshopsUrl}/workshop/${workshopId}`, model, {withCredentials: true});
	}

	public removeMemberInterest(interestId: string) {
		return this.http.delete(`${environment.workshopsUrl}/interest/${interestId}/member`, {withCredentials: true});
	}

	public deleteWorkshop(workshopId: string) {
		return this.http.delete(`${environment.workshopsUrl}/workshop/${workshopId}`, {withCredentials: true});
	}
}
