import { Sentence, taggedWordSchema } from "@/lib/schema";
import { PosRequestDto, posRequestDtoSchema, PosResponseDto, posResponseDtoSchema } from "@/lib/pos-dto";
import { TaggedWord } from "@/lib/types";

export class PosDtoMapper {
  public mapRequestDto(sentence: Sentence): PosRequestDto | null {
    const obj: PosRequestDto = {
      text: sentence.sentence,
    };
    const parsedRequest = posRequestDtoSchema.safeParse(obj);
    return parsedRequest.success ? parsedRequest.data : null;
  }

  public mapResponseDto(response: PosResponseDto): TaggedWord | null {
    const obj: TaggedWord = {
      word: response.word,
      abbreviationTag: response.tag,
      arabicTag: response.arabic_tag,
      englishTag: response.english_tag,
      frenchTag: response.french_tag,
    };
    const parsedResponse = taggedWordSchema.safeParse(obj);
    return parsedResponse.success ? parsedResponse.data : null;
  }
}