export default interface ICreateRatingsDTO {
  user_id: string;
  localization_id: string;
  rating: number;
  comment?: string;
}
