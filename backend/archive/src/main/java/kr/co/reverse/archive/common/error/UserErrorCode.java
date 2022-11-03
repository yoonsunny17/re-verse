package kr.co.reverse.archive.common.error;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum UserErrorCode implements ErrorCode {
    EMAIL_DUPLICATE(4090, "EMAIL DUPLICATED"),
    NICKNAME_DUPLICATE(4091, "NICKNAME DUPLICATED"),

    NOT_FRIEND(4031, "CHO HYE EUN");

    private final int statusCode;
    private final String message;
}
