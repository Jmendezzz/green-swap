package cue.edu.co.greenswap.application.constants;

public class EmailConstant {
    public static final String RESET_PASSWORD_TEMPLATE_ID = "d-ed89ce3dcd3d464bae5553ffcbe16d04";
    public static final String SIGNUP_TEMPLATE_ID = "d-d0d4abdda9964fcf94ead5fbbdcc60cb";
    public static final String EXCHANGE_ACCEPTED_TEMPLATE_ID = "d-"; //TODO: Add template id
    public static final String URL_VALIDATE_EMAIL = "http://localhost:5173/auth/confirm?token=";
    public static final String FROM_EMAIL = "greenswap.team.col@gmail.com";
    public static final String REPLY_EMAIL = "greenswap.team.col@gmail.com";
    public static final int VALIDATE_EMAIL_TOKEN_EXPIRATION_TIME = 15; //minutes
    public static final int RESET_PASSWORD_TOKEN_EXPIRATION_TIME = 120; //minutes
    public static final String URL_RESET_PASSWORD = "http://localhost:5173/reset-password?token=";
    public static final String URL_CONTINUE_EXCHANGE_PROCESS = "http://localhost:5173/exchange/location";
}
