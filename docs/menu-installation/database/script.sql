--
-- PostgreSQL database dump
--

-- Dumped from database version 15.7 (Debian 15.7-0+deb12u1)
-- Dumped by pg_dump version 16.4 (Debian 16.4-1.pgdg120+1)

-- Started on 2024-09-04 20:35:16 -04

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 246 (class 1255 OID 16500)
-- Name: delete_signal_before_insert(); Type: FUNCTION; Schema: public; Owner: openbizview
--

CREATE FUNCTION public.delete_signal_before_insert() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
BEGIN
    DELETE from t_signal
	 where token = NEW.token
	 and pair = NEW.pair
	 and timeframe = NEW.timeframe;
	 RETURN NEW;
END;
$$;


ALTER FUNCTION public.delete_signal_before_insert() OWNER TO openbizview;

--
-- TOC entry 247 (class 1255 OID 16501)
-- Name: delete_token(text, integer); Type: FUNCTION; Schema: public; Owner: openbizview
--

CREATE FUNCTION public.delete_token(ptoken text, pid integer) RETURNS void
    LANGUAGE plpgsql
    AS $$
begin
/**
Delete tokens
Return Void
Valencia 05/06/2023
Andrés Dominguez
**/
delete from t_pair where token = pid and pair = ptoken;
end;

$$;


ALTER FUNCTION public.delete_token(ptoken text, pid integer) OWNER TO openbizview;

--
-- TOC entry 248 (class 1255 OID 16502)
-- Name: delete_user(); Type: FUNCTION; Schema: public; Owner: openbizview
--

CREATE FUNCTION public.delete_user() RETURNS void
    LANGUAGE plpgsql
    AS $$
begin
/**
Delete users
Return Void
Valencia 22/07/2024
Andrés Dominguez
**/
--Delete public t_login
delete from public.t_login where expire_at <= now();

end;

$$;


ALTER FUNCTION public.delete_user() OWNER TO openbizview;

--
-- TOC entry 3518 (class 0 OID 0)
-- Dependencies: 248
-- Name: FUNCTION delete_user(); Type: COMMENT; Schema: public; Owner: openbizview
--

COMMENT ON FUNCTION public.delete_user() IS 'Create User';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 240 (class 1259 OID 28998)
-- Name: 1000SATSUSDT_1h; Type: TABLE; Schema: public; Owner: openbizview
--

CREATE TABLE public."1000SATSUSDT_1h" (
    "timestamp" timestamp without time zone,
    open text,
    high text,
    low text,
    close text,
    volume text,
    close_time bigint,
    quote_av text,
    trades bigint,
    tb_base_av text,
    tb_quote_av text,
    ignore text
);


ALTER TABLE public."1000SATSUSDT_1h" OWNER TO openbizview;

--
-- TOC entry 241 (class 1259 OID 29006)
-- Name: 1000SATSUSDT_4h; Type: TABLE; Schema: public; Owner: openbizview
--

CREATE TABLE public."1000SATSUSDT_4h" (
    "timestamp" timestamp without time zone,
    open text,
    high text,
    low text,
    close text,
    volume text,
    close_time bigint,
    quote_av text,
    trades bigint,
    tb_base_av text,
    tb_quote_av text,
    ignore text
);


ALTER TABLE public."1000SATSUSDT_4h" OWNER TO openbizview;

--
-- TOC entry 237 (class 1259 OID 28958)
-- Name: APTUSDT_1h; Type: TABLE; Schema: public; Owner: openbizview
--

CREATE TABLE public."APTUSDT_1h" (
    "timestamp" timestamp without time zone,
    open text,
    high text,
    low text,
    close text,
    volume text,
    close_time bigint,
    quote_av text,
    trades bigint,
    tb_base_av text,
    tb_quote_av text,
    ignore text
);


ALTER TABLE public."APTUSDT_1h" OWNER TO openbizview;

--
-- TOC entry 238 (class 1259 OID 28965)
-- Name: APTUSDT_4h; Type: TABLE; Schema: public; Owner: openbizview
--

CREATE TABLE public."APTUSDT_4h" (
    "timestamp" timestamp without time zone,
    open text,
    high text,
    low text,
    close text,
    volume text,
    close_time bigint,
    quote_av text,
    trades bigint,
    tb_base_av text,
    tb_quote_av text,
    ignore text
);


ALTER TABLE public."APTUSDT_4h" OWNER TO openbizview;

--
-- TOC entry 225 (class 1259 OID 28776)
-- Name: BNBUSDT_1h; Type: TABLE; Schema: public; Owner: openbizview
--

CREATE TABLE public."BNBUSDT_1h" (
    "timestamp" timestamp without time zone,
    open text,
    high text,
    low text,
    close text,
    volume text,
    close_time bigint,
    quote_av text,
    trades bigint,
    tb_base_av text,
    tb_quote_av text,
    ignore text
);


ALTER TABLE public."BNBUSDT_1h" OWNER TO openbizview;

--
-- TOC entry 230 (class 1259 OID 28912)
-- Name: BNBUSDT_4h; Type: TABLE; Schema: public; Owner: openbizview
--

CREATE TABLE public."BNBUSDT_4h" (
    "timestamp" timestamp without time zone,
    open text,
    high text,
    low text,
    close text,
    volume text,
    close_time bigint,
    quote_av text,
    trades bigint,
    tb_base_av text,
    tb_quote_av text,
    ignore text
);


ALTER TABLE public."BNBUSDT_4h" OWNER TO openbizview;

--
-- TOC entry 231 (class 1259 OID 28918)
-- Name: BNBUSDT_5m; Type: TABLE; Schema: public; Owner: openbizview
--

CREATE TABLE public."BNBUSDT_5m" (
    "timestamp" timestamp without time zone,
    open text,
    high text,
    low text,
    close text,
    volume text,
    close_time bigint,
    quote_av text,
    trades bigint,
    tb_base_av text,
    tb_quote_av text,
    ignore text
);


ALTER TABLE public."BNBUSDT_5m" OWNER TO openbizview;

--
-- TOC entry 226 (class 1259 OID 28782)
-- Name: BTCUSDT_1h; Type: TABLE; Schema: public; Owner: openbizview
--

CREATE TABLE public."BTCUSDT_1h" (
    "timestamp" timestamp without time zone,
    open text,
    high text,
    low text,
    close text,
    volume text,
    close_time bigint,
    quote_av text,
    trades bigint,
    tb_base_av text,
    tb_quote_av text,
    ignore text
);


ALTER TABLE public."BTCUSDT_1h" OWNER TO openbizview;

--
-- TOC entry 242 (class 1259 OID 29014)
-- Name: BTCUSDT_4h; Type: TABLE; Schema: public; Owner: openbizview
--

CREATE TABLE public."BTCUSDT_4h" (
    "timestamp" timestamp without time zone,
    open text,
    high text,
    low text,
    close text,
    volume text,
    close_time bigint,
    quote_av text,
    trades bigint,
    tb_base_av text,
    tb_quote_av text,
    ignore text
);


ALTER TABLE public."BTCUSDT_4h" OWNER TO openbizview;

--
-- TOC entry 224 (class 1259 OID 28764)
-- Name: ETHUSDT_1h; Type: TABLE; Schema: public; Owner: openbizview
--

CREATE TABLE public."ETHUSDT_1h" (
    "timestamp" timestamp without time zone,
    open text,
    high text,
    low text,
    close text,
    volume text,
    close_time bigint,
    quote_av text,
    trades bigint,
    tb_base_av text,
    tb_quote_av text,
    ignore text
);


ALTER TABLE public."ETHUSDT_1h" OWNER TO openbizview;

--
-- TOC entry 234 (class 1259 OID 28938)
-- Name: ETHUSDT_4h; Type: TABLE; Schema: public; Owner: openbizview
--

CREATE TABLE public."ETHUSDT_4h" (
    "timestamp" timestamp without time zone,
    open text,
    high text,
    low text,
    close text,
    volume text,
    close_time bigint,
    quote_av text,
    trades bigint,
    tb_base_av text,
    tb_quote_av text,
    ignore text
);


ALTER TABLE public."ETHUSDT_4h" OWNER TO openbizview;

--
-- TOC entry 228 (class 1259 OID 28859)
-- Name: LUNCUSDT_1h; Type: TABLE; Schema: public; Owner: openbizview
--

CREATE TABLE public."LUNCUSDT_1h" (
    "timestamp" timestamp without time zone,
    open text,
    high text,
    low text,
    close text,
    volume text,
    close_time bigint,
    quote_av text,
    trades bigint,
    tb_base_av text,
    tb_quote_av text,
    ignore text
);


ALTER TABLE public."LUNCUSDT_1h" OWNER TO openbizview;

--
-- TOC entry 233 (class 1259 OID 28930)
-- Name: LUNCUSDT_4h; Type: TABLE; Schema: public; Owner: openbizview
--

CREATE TABLE public."LUNCUSDT_4h" (
    "timestamp" timestamp without time zone,
    open text,
    high text,
    low text,
    close text,
    volume text,
    close_time bigint,
    quote_av text,
    trades bigint,
    tb_base_av text,
    tb_quote_av text,
    ignore text
);


ALTER TABLE public."LUNCUSDT_4h" OWNER TO openbizview;

--
-- TOC entry 227 (class 1259 OID 28853)
-- Name: NEARUSDT_1h; Type: TABLE; Schema: public; Owner: openbizview
--

CREATE TABLE public."NEARUSDT_1h" (
    "timestamp" timestamp without time zone,
    open text,
    high text,
    low text,
    close text,
    volume text,
    close_time bigint,
    quote_av text,
    trades bigint,
    tb_base_av text,
    tb_quote_av text,
    ignore text
);


ALTER TABLE public."NEARUSDT_1h" OWNER TO openbizview;

--
-- TOC entry 232 (class 1259 OID 28924)
-- Name: NEARUSDT_4h; Type: TABLE; Schema: public; Owner: openbizview
--

CREATE TABLE public."NEARUSDT_4h" (
    "timestamp" timestamp without time zone,
    open text,
    high text,
    low text,
    close text,
    volume text,
    close_time bigint,
    quote_av text,
    trades bigint,
    tb_base_av text,
    tb_quote_av text,
    ignore text
);


ALTER TABLE public."NEARUSDT_4h" OWNER TO openbizview;

--
-- TOC entry 239 (class 1259 OID 28990)
-- Name: PEPEUSDT_1h; Type: TABLE; Schema: public; Owner: openbizview
--

CREATE TABLE public."PEPEUSDT_1h" (
    "timestamp" timestamp without time zone,
    open text,
    high text,
    low text,
    close text,
    volume text,
    close_time bigint,
    quote_av text,
    trades bigint,
    tb_base_av text,
    tb_quote_av text,
    ignore text
);


ALTER TABLE public."PEPEUSDT_1h" OWNER TO openbizview;

--
-- TOC entry 235 (class 1259 OID 28944)
-- Name: SOLUSDT_1h; Type: TABLE; Schema: public; Owner: openbizview
--

CREATE TABLE public."SOLUSDT_1h" (
    "timestamp" timestamp without time zone,
    open text,
    high text,
    low text,
    close text,
    volume text,
    close_time bigint,
    quote_av text,
    trades bigint,
    tb_base_av text,
    tb_quote_av text,
    ignore text
);


ALTER TABLE public."SOLUSDT_1h" OWNER TO openbizview;

--
-- TOC entry 236 (class 1259 OID 28950)
-- Name: SOLUSDT_4h; Type: TABLE; Schema: public; Owner: openbizview
--

CREATE TABLE public."SOLUSDT_4h" (
    "timestamp" timestamp without time zone,
    open text,
    high text,
    low text,
    close text,
    volume text,
    close_time bigint,
    quote_av text,
    trades bigint,
    tb_base_av text,
    tb_quote_av text,
    ignore text
);


ALTER TABLE public."SOLUSDT_4h" OWNER TO openbizview;

--
-- TOC entry 245 (class 1259 OID 37079)
-- Name: SUNUSDT_4h; Type: TABLE; Schema: public; Owner: openbizview
--

CREATE TABLE public."SUNUSDT_4h" (
    "timestamp" timestamp without time zone,
    open text,
    high text,
    low text,
    close text,
    volume text,
    close_time bigint,
    quote_av text,
    trades bigint,
    tb_base_av text,
    tb_quote_av text,
    ignore text
);


ALTER TABLE public."SUNUSDT_4h" OWNER TO openbizview;

--
-- TOC entry 229 (class 1259 OID 28904)
-- Name: binance_coingecko_mapping; Type: TABLE; Schema: public; Owner: openbizview
--

CREATE TABLE public.binance_coingecko_mapping (
    binance_symbol character varying NOT NULL,
    coingecko_id character varying NOT NULL
);


ALTER TABLE public.binance_coingecko_mapping OWNER TO openbizview;

--
-- TOC entry 214 (class 1259 OID 16523)
-- Name: capital; Type: TABLE; Schema: public; Owner: openbizview
--

CREATE TABLE public.capital (
    id integer NOT NULL,
    token bigint NOT NULL,
    pair text NOT NULL,
    timeframe text NOT NULL,
    capital double precision NOT NULL,
    crypto_amount double precision NOT NULL,
    "timestamp" timestamp without time zone NOT NULL,
    cumulative_strategy_return double precision,
    cumulative_market_return double precision,
    first_trade boolean DEFAULT true,
    capital_accumulated double precision DEFAULT 0.0
);


ALTER TABLE public.capital OWNER TO openbizview;

--
-- TOC entry 215 (class 1259 OID 16529)
-- Name: capital_id_seq; Type: SEQUENCE; Schema: public; Owner: openbizview
--

CREATE SEQUENCE public.capital_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.capital_id_seq OWNER TO openbizview;

--
-- TOC entry 3519 (class 0 OID 0)
-- Dependencies: 215
-- Name: capital_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: openbizview
--

ALTER SEQUENCE public.capital_id_seq OWNED BY public.capital.id;


--
-- TOC entry 244 (class 1259 OID 29047)
-- Name: capital_trader_gainers; Type: TABLE; Schema: public; Owner: openbizview
--

CREATE TABLE public.capital_trader_gainers (
    id integer NOT NULL,
    capital double precision NOT NULL,
    capital_distribution integer NOT NULL,
    token bigint NOT NULL,
    signal integer DEFAULT 0 NOT NULL
);


ALTER TABLE public.capital_trader_gainers OWNER TO openbizview;

--
-- TOC entry 243 (class 1259 OID 29046)
-- Name: capital_trader_gainers_id_seq; Type: SEQUENCE; Schema: public; Owner: openbizview
--

CREATE SEQUENCE public.capital_trader_gainers_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.capital_trader_gainers_id_seq OWNER TO openbizview;

--
-- TOC entry 3520 (class 0 OID 0)
-- Dependencies: 243
-- Name: capital_trader_gainers_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: openbizview
--

ALTER SEQUENCE public.capital_trader_gainers_id_seq OWNED BY public.capital_trader_gainers.id;


--
-- TOC entry 216 (class 1259 OID 16535)
-- Name: t_bot_status; Type: TABLE; Schema: public; Owner: openbizview
--

CREATE TABLE public.t_bot_status (
    status integer NOT NULL,
    token bigint NOT NULL,
    pair text NOT NULL,
    timeframe text NOT NULL
);


ALTER TABLE public.t_bot_status OWNER TO openbizview;

--
-- TOC entry 217 (class 1259 OID 16540)
-- Name: t_login; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.t_login (
    token bigint NOT NULL,
    api_key text,
    api_secret text,
    name text,
    last_name text,
    is_owner boolean DEFAULT false NOT NULL,
    want_signal boolean DEFAULT true
);


ALTER TABLE public.t_login OWNER TO postgres;

--
-- TOC entry 218 (class 1259 OID 16545)
-- Name: t_signal; Type: TABLE; Schema: public; Owner: openbizview
--

CREATE TABLE public.t_signal (
    id integer NOT NULL,
    signal bigint NOT NULL,
    token bigint NOT NULL,
    pair text NOT NULL,
    timeframe text NOT NULL,
    gain_threshold double precision DEFAULT 0.001 NOT NULL,
    stop_loss_threshold double precision DEFAULT 0.05
);


ALTER TABLE public.t_signal OWNER TO openbizview;

--
-- TOC entry 219 (class 1259 OID 16550)
-- Name: t_signal_id_seq; Type: SEQUENCE; Schema: public; Owner: openbizview
--

CREATE SEQUENCE public.t_signal_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.t_signal_id_seq OWNER TO openbizview;

--
-- TOC entry 3521 (class 0 OID 0)
-- Dependencies: 219
-- Name: t_signal_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: openbizview
--

ALTER SEQUENCE public.t_signal_id_seq OWNED BY public.t_signal.id;


--
-- TOC entry 220 (class 1259 OID 16551)
-- Name: trader_gainers; Type: TABLE; Schema: public; Owner: openbizview
--

CREATE TABLE public.trader_gainers (
    id integer NOT NULL,
    token bigint NOT NULL,
    pair text NOT NULL,
    stop_loss real DEFAULT 0 NOT NULL,
    order_number bigint DEFAULT 0 NOT NULL,
    origin text NOT NULL
);


ALTER TABLE public.trader_gainers OWNER TO openbizview;

--
-- TOC entry 221 (class 1259 OID 16558)
-- Name: trader_gainers_id_seq; Type: SEQUENCE; Schema: public; Owner: openbizview
--

CREATE SEQUENCE public.trader_gainers_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.trader_gainers_id_seq OWNER TO openbizview;

--
-- TOC entry 3522 (class 0 OID 0)
-- Dependencies: 221
-- Name: trader_gainers_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: openbizview
--

ALTER SEQUENCE public.trader_gainers_id_seq OWNED BY public.trader_gainers.id;


--
-- TOC entry 222 (class 1259 OID 16559)
-- Name: training_in_progress; Type: TABLE; Schema: public; Owner: openbizview
--

CREATE TABLE public.training_in_progress (
    id integer NOT NULL,
    pair_timeframe text NOT NULL
);


ALTER TABLE public.training_in_progress OWNER TO openbizview;

--
-- TOC entry 223 (class 1259 OID 16564)
-- Name: training_in_progress_id_seq; Type: SEQUENCE; Schema: public; Owner: openbizview
--

CREATE SEQUENCE public.training_in_progress_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.training_in_progress_id_seq OWNER TO openbizview;

--
-- TOC entry 3523 (class 0 OID 0)
-- Dependencies: 223
-- Name: training_in_progress_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: openbizview
--

ALTER SEQUENCE public.training_in_progress_id_seq OWNED BY public.training_in_progress.id;


--
-- TOC entry 3310 (class 2604 OID 16565)
-- Name: capital id; Type: DEFAULT; Schema: public; Owner: openbizview
--

ALTER TABLE ONLY public.capital ALTER COLUMN id SET DEFAULT nextval('public.capital_id_seq'::regclass);


--
-- TOC entry 3322 (class 2604 OID 29050)
-- Name: capital_trader_gainers id; Type: DEFAULT; Schema: public; Owner: openbizview
--

ALTER TABLE ONLY public.capital_trader_gainers ALTER COLUMN id SET DEFAULT nextval('public.capital_trader_gainers_id_seq'::regclass);


--
-- TOC entry 3315 (class 2604 OID 16566)
-- Name: t_signal id; Type: DEFAULT; Schema: public; Owner: openbizview
--

ALTER TABLE ONLY public.t_signal ALTER COLUMN id SET DEFAULT nextval('public.t_signal_id_seq'::regclass);


--
-- TOC entry 3318 (class 2604 OID 16567)
-- Name: trader_gainers id; Type: DEFAULT; Schema: public; Owner: openbizview
--

ALTER TABLE ONLY public.trader_gainers ALTER COLUMN id SET DEFAULT nextval('public.trader_gainers_id_seq'::regclass);


--
-- TOC entry 3321 (class 2604 OID 16568)
-- Name: training_in_progress id; Type: DEFAULT; Schema: public; Owner: openbizview
--

ALTER TABLE ONLY public.training_in_progress ALTER COLUMN id SET DEFAULT nextval('public.training_in_progress_id_seq'::regclass);


--
-- TOC entry 3347 (class 2606 OID 28910)
-- Name: binance_coingecko_mapping binance_coingecko_mapping_pkey; Type: CONSTRAINT; Schema: public; Owner: openbizview
--

ALTER TABLE ONLY public.binance_coingecko_mapping
    ADD CONSTRAINT binance_coingecko_mapping_pkey PRIMARY KEY (binance_symbol);


--
-- TOC entry 3325 (class 2606 OID 16570)
-- Name: capital capital_pkey; Type: CONSTRAINT; Schema: public; Owner: openbizview
--

ALTER TABLE ONLY public.capital
    ADD CONSTRAINT capital_pkey PRIMARY KEY (id);


--
-- TOC entry 3327 (class 2606 OID 26979)
-- Name: capital capital_token_pair_timeframe_key; Type: CONSTRAINT; Schema: public; Owner: openbizview
--

ALTER TABLE ONLY public.capital
    ADD CONSTRAINT capital_token_pair_timeframe_key UNIQUE (token, pair, timeframe);


--
-- TOC entry 3363 (class 2606 OID 29052)
-- Name: capital_trader_gainers capital_trader_gainers_pkey; Type: CONSTRAINT; Schema: public; Owner: openbizview
--

ALTER TABLE ONLY public.capital_trader_gainers
    ADD CONSTRAINT capital_trader_gainers_pkey PRIMARY KEY (id);


--
-- TOC entry 3331 (class 2606 OID 26996)
-- Name: t_bot_status t_bot_status_pkey; Type: CONSTRAINT; Schema: public; Owner: openbizview
--

ALTER TABLE ONLY public.t_bot_status
    ADD CONSTRAINT t_bot_status_pkey PRIMARY KEY (token, pair, timeframe);


--
-- TOC entry 3333 (class 2606 OID 16576)
-- Name: t_login t_login_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.t_login
    ADD CONSTRAINT t_login_pkey PRIMARY KEY (token);


--
-- TOC entry 3336 (class 2606 OID 16578)
-- Name: t_signal t_signal_pkey; Type: CONSTRAINT; Schema: public; Owner: openbizview
--

ALTER TABLE ONLY public.t_signal
    ADD CONSTRAINT t_signal_pkey PRIMARY KEY (id);


--
-- TOC entry 3338 (class 2606 OID 16580)
-- Name: trader_gainers trader_gainers_pkey; Type: CONSTRAINT; Schema: public; Owner: openbizview
--

ALTER TABLE ONLY public.trader_gainers
    ADD CONSTRAINT trader_gainers_pkey PRIMARY KEY (id);


--
-- TOC entry 3340 (class 2606 OID 16582)
-- Name: training_in_progress training_in_progress_pkey; Type: CONSTRAINT; Schema: public; Owner: openbizview
--

ALTER TABLE ONLY public.training_in_progress
    ADD CONSTRAINT training_in_progress_pkey PRIMARY KEY (id);


--
-- TOC entry 3365 (class 2606 OID 37066)
-- Name: capital_trader_gainers unique_token; Type: CONSTRAINT; Schema: public; Owner: openbizview
--

ALTER TABLE ONLY public.capital_trader_gainers
    ADD CONSTRAINT unique_token UNIQUE (token);


--
-- TOC entry 3329 (class 1259 OID 26997)
-- Name: idx1_token_pair_timeframe; Type: INDEX; Schema: public; Owner: openbizview
--

CREATE INDEX idx1_token_pair_timeframe ON public.t_bot_status USING btree (token, pair, timeframe);


--
-- TOC entry 3334 (class 1259 OID 26964)
-- Name: idx2_token_pair_timeframe; Type: INDEX; Schema: public; Owner: openbizview
--

CREATE INDEX idx2_token_pair_timeframe ON public.t_signal USING btree (token, pair, timeframe);


--
-- TOC entry 3328 (class 1259 OID 26980)
-- Name: idx_token_pair_timeframe; Type: INDEX; Schema: public; Owner: openbizview
--

CREATE INDEX idx_token_pair_timeframe ON public.capital USING btree (token, pair, timeframe);


--
-- TOC entry 3359 (class 1259 OID 29003)
-- Name: ix_1000SATSUSDT_1h_timestamp; Type: INDEX; Schema: public; Owner: openbizview
--

CREATE INDEX "ix_1000SATSUSDT_1h_timestamp" ON public."1000SATSUSDT_1h" USING btree ("timestamp");


--
-- TOC entry 3360 (class 1259 OID 29011)
-- Name: ix_1000SATSUSDT_4h_timestamp; Type: INDEX; Schema: public; Owner: openbizview
--

CREATE INDEX "ix_1000SATSUSDT_4h_timestamp" ON public."1000SATSUSDT_4h" USING btree ("timestamp");


--
-- TOC entry 3356 (class 1259 OID 28963)
-- Name: ix_APTUSDT_1h_timestamp; Type: INDEX; Schema: public; Owner: openbizview
--

CREATE INDEX "ix_APTUSDT_1h_timestamp" ON public."APTUSDT_1h" USING btree ("timestamp");


--
-- TOC entry 3357 (class 1259 OID 28970)
-- Name: ix_APTUSDT_4h_timestamp; Type: INDEX; Schema: public; Owner: openbizview
--

CREATE INDEX "ix_APTUSDT_4h_timestamp" ON public."APTUSDT_4h" USING btree ("timestamp");


--
-- TOC entry 3342 (class 1259 OID 28781)
-- Name: ix_BNBUSDT_1h_timestamp; Type: INDEX; Schema: public; Owner: openbizview
--

CREATE INDEX "ix_BNBUSDT_1h_timestamp" ON public."BNBUSDT_1h" USING btree ("timestamp");


--
-- TOC entry 3349 (class 1259 OID 28917)
-- Name: ix_BNBUSDT_4h_timestamp; Type: INDEX; Schema: public; Owner: openbizview
--

CREATE INDEX "ix_BNBUSDT_4h_timestamp" ON public."BNBUSDT_4h" USING btree ("timestamp");


--
-- TOC entry 3350 (class 1259 OID 28923)
-- Name: ix_BNBUSDT_5m_timestamp; Type: INDEX; Schema: public; Owner: openbizview
--

CREATE INDEX "ix_BNBUSDT_5m_timestamp" ON public."BNBUSDT_5m" USING btree ("timestamp");


--
-- TOC entry 3343 (class 1259 OID 28787)
-- Name: ix_BTCUSDT_1h_timestamp; Type: INDEX; Schema: public; Owner: openbizview
--

CREATE INDEX "ix_BTCUSDT_1h_timestamp" ON public."BTCUSDT_1h" USING btree ("timestamp");


--
-- TOC entry 3361 (class 1259 OID 29019)
-- Name: ix_BTCUSDT_4h_timestamp; Type: INDEX; Schema: public; Owner: openbizview
--

CREATE INDEX "ix_BTCUSDT_4h_timestamp" ON public."BTCUSDT_4h" USING btree ("timestamp");


--
-- TOC entry 3341 (class 1259 OID 28769)
-- Name: ix_ETHUSDT_1h_timestamp; Type: INDEX; Schema: public; Owner: openbizview
--

CREATE INDEX "ix_ETHUSDT_1h_timestamp" ON public."ETHUSDT_1h" USING btree ("timestamp");


--
-- TOC entry 3353 (class 1259 OID 28943)
-- Name: ix_ETHUSDT_4h_timestamp; Type: INDEX; Schema: public; Owner: openbizview
--

CREATE INDEX "ix_ETHUSDT_4h_timestamp" ON public."ETHUSDT_4h" USING btree ("timestamp");


--
-- TOC entry 3345 (class 1259 OID 28864)
-- Name: ix_LUNCUSDT_1h_timestamp; Type: INDEX; Schema: public; Owner: openbizview
--

CREATE INDEX "ix_LUNCUSDT_1h_timestamp" ON public."LUNCUSDT_1h" USING btree ("timestamp");


--
-- TOC entry 3352 (class 1259 OID 28935)
-- Name: ix_LUNCUSDT_4h_timestamp; Type: INDEX; Schema: public; Owner: openbizview
--

CREATE INDEX "ix_LUNCUSDT_4h_timestamp" ON public."LUNCUSDT_4h" USING btree ("timestamp");


--
-- TOC entry 3344 (class 1259 OID 28858)
-- Name: ix_NEARUSDT_1h_timestamp; Type: INDEX; Schema: public; Owner: openbizview
--

CREATE INDEX "ix_NEARUSDT_1h_timestamp" ON public."NEARUSDT_1h" USING btree ("timestamp");


--
-- TOC entry 3351 (class 1259 OID 28929)
-- Name: ix_NEARUSDT_4h_timestamp; Type: INDEX; Schema: public; Owner: openbizview
--

CREATE INDEX "ix_NEARUSDT_4h_timestamp" ON public."NEARUSDT_4h" USING btree ("timestamp");


--
-- TOC entry 3358 (class 1259 OID 28995)
-- Name: ix_PEPEUSDT_1h_timestamp; Type: INDEX; Schema: public; Owner: openbizview
--

CREATE INDEX "ix_PEPEUSDT_1h_timestamp" ON public."PEPEUSDT_1h" USING btree ("timestamp");


--
-- TOC entry 3354 (class 1259 OID 28949)
-- Name: ix_SOLUSDT_1h_timestamp; Type: INDEX; Schema: public; Owner: openbizview
--

CREATE INDEX "ix_SOLUSDT_1h_timestamp" ON public."SOLUSDT_1h" USING btree ("timestamp");


--
-- TOC entry 3355 (class 1259 OID 28955)
-- Name: ix_SOLUSDT_4h_timestamp; Type: INDEX; Schema: public; Owner: openbizview
--

CREATE INDEX "ix_SOLUSDT_4h_timestamp" ON public."SOLUSDT_4h" USING btree ("timestamp");


--
-- TOC entry 3366 (class 1259 OID 37084)
-- Name: ix_SUNUSDT_4h_timestamp; Type: INDEX; Schema: public; Owner: openbizview
--

CREATE INDEX "ix_SUNUSDT_4h_timestamp" ON public."SUNUSDT_4h" USING btree ("timestamp");


--
-- TOC entry 3348 (class 1259 OID 28911)
-- Name: ix_binance_symbol; Type: INDEX; Schema: public; Owner: openbizview
--

CREATE INDEX ix_binance_symbol ON public.binance_coingecko_mapping USING btree (binance_symbol);


--
-- TOC entry 3370 (class 2620 OID 16590)
-- Name: t_signal delete_signal; Type: TRIGGER; Schema: public; Owner: openbizview
--

CREATE TRIGGER delete_signal BEFORE INSERT ON public.t_signal FOR EACH ROW EXECUTE FUNCTION public.delete_signal_before_insert();


--
-- TOC entry 3367 (class 2606 OID 26981)
-- Name: capital capital_fkey1; Type: FK CONSTRAINT; Schema: public; Owner: openbizview
--

ALTER TABLE ONLY public.capital
    ADD CONSTRAINT capital_fkey1 FOREIGN KEY (token) REFERENCES public.t_login(token);


--
-- TOC entry 3368 (class 2606 OID 26998)
-- Name: t_bot_status t_bot_status_fkey1; Type: FK CONSTRAINT; Schema: public; Owner: openbizview
--

ALTER TABLE ONLY public.t_bot_status
    ADD CONSTRAINT t_bot_status_fkey1 FOREIGN KEY (token) REFERENCES public.t_login(token);


--
-- TOC entry 3369 (class 2606 OID 27023)
-- Name: trader_gainers trader_gainers_fkey1; Type: FK CONSTRAINT; Schema: public; Owner: openbizview
--

ALTER TABLE ONLY public.trader_gainers
    ADD CONSTRAINT trader_gainers_fkey1 FOREIGN KEY (token) REFERENCES public.t_login(token);


-- Completed on 2024-09-04 20:35:34 -04

--
-- PostgreSQL database dump complete
--

